import Hitbox from "./Hitbox";



beforeEach(() => {
	jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
	});
	HTMLElement.prototype.getBoundingClientRect = function () {
		return {
			top: parseFloat(this.style.top),
			left: parseFloat(this.style.left),
			width: parseFloat(this.style.width),
			height: parseFloat(this.style.height),
		}
	}
});

afterEach(() => {
	window.requestAnimationFrame.mockRestore();
});

describe('Creation of the DomCollisionObject', () => {
	test('Constructor gives an error if missing element option', () => {
		expect(() => {
			new Hitbox({})
		}).toThrow(Error)
	})
})

describe('Collision detection', () => {
	test ('Detects when there is a collision', done => {
		document.body.innerHTML = `
			<div class="el" style="position: absolute; top: 20px; left: 25px; width: 100px; height: 50px;"></div>
			<div class="el" style="position: absolute; top: 50px; left: 110px; width: 50px; height: 50px;"></div>
		`
		const hitboxWatcher = new Hitbox({
			elements: '.el'
		})
		hitboxWatcher.onCollision(collision => {
			done()
		})
		hitboxWatcher.loop()
	})
	test ('Computes overlap', done => {
		document.body.innerHTML = `
			<div class="el" style="position: absolute; top: 20px; left: 25px; width: 100px; height: 50px;"></div>
			<div class="el" style="position: absolute; top: 50px; left: 110px; width: 50px; height: 50px;"></div>
		`
		const hitboxWatcher = new Hitbox({
			elements: '.el'
		})
		hitboxWatcher.onCollision(collision => {
			expect(collision.overlap).toBe(0.12)
			done()
		})
		hitboxWatcher.loop()
	})
})
