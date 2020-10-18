export default class Errors {
    static targetNotProvided () {
        throw new Error("Error in DOM Collisions: you must provide a target element.")
    }
}
