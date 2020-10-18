import Errors from "@/domcollisions/Errors";

export default class DomCollisions {
    constructor (options) {
        if (!options.targets) Errors.targetNotProvided()
        this.onScreenOnly = options.onScreenOnly !== false
        this.targets = document.querySelectorAll(options.targets)
        this.loop()
    }

    loop () {
        this.compareEach(this.computeIntersection.bind(this))
        window.requestAnimationFrame(this.loop.bind(this))
    }

    computeIntersection (el1, el2) {
        const r1 = el1.getBoundingClientRect()
        const r2 = el2.getBoundingClientRect()
        const w = Math.min(r1.left + r1.width, r2.left + r2.width) - Math.max(r1.left, r2.left)
        const h = Math.min(r1.top + r1.height, r2.top + r2.width) - Math.max(r1.top, r2.top)

        if (h > 0 && w > 0) {
            const area = w * h
            console.log(area)
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
