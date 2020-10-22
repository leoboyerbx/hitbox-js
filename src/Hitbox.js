import Errors from "./Errors";
import EventStack from "./EvenStack";
import Collision from "@/hitbox-js/src/Collision";

export default class Hitbox {
    constructor ({ elements, targetElements, watch = true, minOverlap = 0, onScreenOnly = false, debug = false }) {
        this.events = new EventStack()
        this.previousCollisions = []

        if (!elements) Errors.targetNotProvided()
        this.targets = this.setUpTargets(elements)
        if (targetElements) this.targetElements = this.setUpTargets(targetElements)

        this.watching = watch
        this.minOverlap = minOverlap
        this.onScreenOnly = onScreenOnly
        this.debug = debug

        this.loop()
    }

    setUpTargets (targets) {
        if (targets instanceof NodeList || Array.isArray(targets)) {
            return targets
        }
        if (typeof targets === 'string') {
            return document.querySelectorAll(targets)
        }
    }

    loop () {
        if (this.debug) this.cleanDebugRects()
        this.compareEach(this.computeIntersection.bind(this))
        if (this.watching) window.requestAnimationFrame(this.loop.bind(this))
    }

    watch () {
        this.watching = true
        window.requestAnimationFrame(this.loop.bind(this))
    }

    unwatch () {
        this.watching = false
    }

    on (trigger, callback) {
        this.events.register(trigger, callback)
    }

    onCollisionStart(callback) {
        return this.on('collisionStart', callback)
    }
    onCollisionEnd(callback) {
        return this.on('collisionEnd', callback)
    }
    onCollision(callback) {
        return this.on('collision', callback)
    }

    computeIntersection (el1, el2) {
        const r1 = el1.getBoundingClientRect()
        const r2 = el2.getBoundingClientRect()
        const left = Math.max(r1.left, r2.left)
        const top = Math.max(r1.top, r2.top)
        const w = Math.min(r1.left + r1.width, r2.left + r2.width) - left
        const h = Math.min(r1.top + r1.height, r2.top + r2.height) - top

        if (h > 0 && w > 0) {

            const minRectArea = Math.min(r1.width * r1.height, r2.width * r2.height) || 1
            const collision = new Collision({el1, el2, width: w, height: h, top, left, minRectArea})
            if (collision.overlap >= this.minOverlap) {
                if (!collision.alreadyIn(this.previousCollisions)) {
                    this.previousCollisions.push(collision)
                    this.events.call('collisionStart', [ collision ])
                }
                this.events.call('collision', [ collision ])
                if (this.debug) {
                    this.drawDebugRectangle(collision)
                }
            }
        } else {
            const virtualCollision = new Collision({el1: el1, el2: el2})
            const isPreviousCollision = virtualCollision.alreadyIn(this.previousCollisions)
            if (isPreviousCollision) {
                this.events.call('collisionEnd', [ this.previousCollisions[isPreviousCollision.index] ])
                this.previousCollisions.splice(isPreviousCollision.index, 1)
            }
        }
    }

    compareEach (func) {
        if (this.targetElements) {
            this.targets.forEach(element => {
                this.targetElements.forEach(target => {
                    func(element, target)
                })
            })
        } else {
            const targets = this.targets
            for (let i = 0; i < targets.length; i++) {
                for (let k = i + 1; k < targets.length; k++) {
                    if (targets[i] !== targets[k]) {
                        func(targets[i], targets[k])
                    }
                }
            }
        }
    }

    drawDebugRectangle (collision) {
        const debugRect = document.createElement('div')
        debugRect.style.position = 'fixed'
        debugRect.style.top = collision.top + 'px'
        debugRect.style.left = collision.left + 'px'
        debugRect.style.width = collision.width + 'px'
        debugRect.style.height = collision.height + 'px'
        debugRect.style.background = 'rgba(249,255,27,0.6)'
        debugRect.style.border = 'solid rgb(249,255,27) 1px'
        debugRect.classList.add('hitbox-debug-rect')
        document.body.append(debugRect)
    }

    cleanDebugRects () {
        document.querySelectorAll('.hitbox-debug-rect').forEach(element => (element.remove()))
    }

    setDebug (set) {
        this.debug = set
    }
    //
    // static isOutOfViewPort (rect) {
    //     return (
    //         rect.bottom < 0
    //     )
    // }
}
