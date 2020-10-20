import Errors from "./Errors";

describe('Helper functions to throw errors', () => {
	test('Throws an error for unspecified target', () => {
		expect(() => {
			Errors.targetNotProvided()
		}).toThrow(Error);
	});
})
