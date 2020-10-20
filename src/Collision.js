export default class Collision {
    constructor({el1, el2, width, height, top, left}) {
        this.elements = [el1, el2] || []
        this.elements.sort()
        this.area = width * height || 0
        this.width = width || 0
        this.height = height || 0
        this.top = top || 0
        this.left = left || 0

        const r1 = el1.getBoundingClientRect()
        const r2 = el2.getBoundingClientRect()
        const minRectArea = Math.min(r1.width * r1.height, r2.width * r2.height) || 1
        this.overlap = this.area / minRectArea || 0
    }

    alreadyIn (arrayOfCollisions) {
        for (let i = 0; i < arrayOfCollisions.length; i++) {
            if (this.elements[0] === arrayOfCollisions[i].elements[0] && this.elements[1] === arrayOfCollisions[i].elements[1] ) return {result: true, index: i}
        }
        return false
    }
}
