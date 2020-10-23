export default class Errors {
    static noArgumentProvided () {
        throw new Error("Error in DOM Collisions: function arguments not provided.")
    }
    static targetNotProvided () {
        throw new Error("Error in DOM Collisions: you must provide a target element.")
    }
    static wrongTargetType (providedType) {
        throw new Error("Error in DOM Collisions: wrong argument type provided for elements or targetElements. Expected string, NodeList, or Node. Got " + providedType)
    }
}
