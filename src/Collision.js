export default class Collision {
    constructor({el1, el2, width, height, top, left, minRectArea}) {
        this.element = el1
        this.targetElement = el2
        this.elements = [el1, el2] || []
        this.elements.sort()
        this.area = width * height || 0
        this.width = width || 0
        this.height = height || 0
        this.top = top || 0
        this.left = left || 0
        this.overlap = this.area / minRectArea || 0
    }

    alreadyIn (arrayOfCollisions) {
        for (let i = 0; i < arrayOfCollisions.length; i++) {
            if (this.elements[0] === arrayOfCollisions[i].elements[0] && this.elements[1] === arrayOfCollisions[i].elements[1] ) return {result: true, index: i}
        }
        return false
    }
}
