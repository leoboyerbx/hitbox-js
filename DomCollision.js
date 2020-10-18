import Errors from "@/dom-collisions/Errors";
import EventStack from "@/dom-collisions/EvenStack";

export default class DomCollision {
    constructor (options) {
        this.events = new EventStack()

        if (!options.targets) Errors.targetNotProvided()
        this.onScreenOnly = options.onScreenOnly !== false
        this.targets = document.querySelectorAll(options.targets)
        this.loop()
    }

    loop () {
        this.compareEach(this.computeIntersection.bind(this))
        window.requestAnimationFrame(this.loop.bind(this))
    }

    on (trigger, callback) {
        this.events.register(trigger, callback)
    }

    onCollision(callback) {
        return this.on('collision', callback)
    }

    computeIntersection (el1, el2) {
        const r1 = el1.getBoundingClientRect()
        const r2 = el2.getBoundingClientRect()
        const w = Math.min(r1.left + r1.width, r2.left + r2.width) - Math.max(r1.left, r2.left)
        const h = Math.min(r1.top + r1.height, r2.top + r2.width) - Math.max(r1.top, r2.top)

        if (h > 0 && w > 0) {
            const minRectArea = Math.min(r1.width * r1.height, r2.width * r2.height)
            const area = w * h
            const overlap = area / minRectArea
            this.events.call('collision', [el1, el2, overlap, area])
        }
    }

    compareEach (func) {
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
