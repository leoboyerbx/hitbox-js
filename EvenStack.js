class EventStack {

    constructor (thisContext = null) {
        this.stack = {}
        this.thisContext = thisContext
    }

    register(trigger, callback) {
        if (!this.stack[trigger]) {
            this.stack[trigger] = []
        }
        this.stack[trigger].push(callback)
    }

    call(trigger, args = []) {
        if (this.stack[trigger] && this.stack[trigger].length > 0) {
            this.stack[trigger].map(action => {
                action.apply(this.thisContext, args)
            })
        }
    }
}

export default EventStack
