import Hitbox from "./Hitbox";

beforeEach(() => {
	jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
		console.log('requested animation frame')
	});
});

afterEach(() => {
	window.requestAnimationFrame.mockRestore();
});

describe('Creation of the DomCollisionObject', () => {
	test('Constructor gives an error if argument is not present', () => {
		expect(() => {
			new Hitbox({})
		}).toThrow(Error)
	})
	test('Constructor gives an error if required options are not present', () => {
		expect(() => {
			new Hitbox({targets: {}})
		}).toThrow(Error)
	})
})

describe('Collision detection', () => {
	const rect1 = document.createElement('div')
	rect1.classList.add('el')
	rect1.style.position = 'absolute'
	rect1.style.top = '20px'
	rect1.style.left = '25px'
	rect1.style.width = '100px'
	rect1.style.heigth = '50px'
	const rect2 = rect1.cloneNode()
	rect2.style.top = '50px'
	rect2.style.left = '110px'
	rect2.style.width = '50px'
	rect2.style.heigth = '50px'
	document.body.append(rect1, rect2)
	test ('Detects when there is a collision', done => {
		const collision = new Hitbox({
			targets: {
				targets: '.el'
			}
		})
		collision.onCollision(() => {
			done()
		})
	})
})
