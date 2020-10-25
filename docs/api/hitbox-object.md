# The Hitbox object

## Hitbox constructor

![](../.gitbook/assets/debug.gif)

The detection of the collisions begins by creating an object that will watch the DOM.

```javascript
const hitboxWatcher = new Hitbox(options)
```

`options` is an object with several arguments.

### Constructor arguments \(in the `{options}` object\)

#### `elements`

| Expected type | Required |
| :--- | :--- |
| `string | NodeList | Node` | **Yes** |

 The CSS selector or a NodeList of the elements you want to watch. Any collision between any of those elements will trigger a collision event.

{% hint style="warning" %}
If you need to _later_ add elements that will be taken in account for collisions detection, the type of this argument matter. See [Static vs dynamic targets](../advanced/static-vs-dynamic-targets.md).
{% endhint %}

{% tabs %}
{% tab title="With CSS Selector" %}
```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements'
})
```
{% endtab %}

{% tab title="With NodeList" %}
```javascript
const myElements = document.querySelectorAll('.my-elements')

const hitboxWatcher = new Hitbox({
    elements: myElements
})
```
{% endtab %}

{% tab title="With single element" %}
```javascript
const myElement = document.querySelector('#my-element')

const hitboxWatcher = new Hitbox({
    elements: myElement
})
```
{% endtab %}
{% endtabs %}

#### `targetElements`

| Expected type | Required |
| :--- | :--- |
| `string | NodeList | Node` | No |

 The CSS selector or a NodeList of a second set of elements you want to watch.

If provided, collision events will only fire when an element from `elements` hits an element from `targetElements`.

{% hint style="warning" %}
If you need to _later_ add elements that will be taken in account for collisions detection, the type of this argument matter. See [Static vs dynamic targets](../advanced/static-vs-dynamic-targets.md).
{% endhint %}

{% tabs %}
{% tab title="Example" %}
```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    targetElements: '.my-target-elements'
})
```
{% endtab %}
{% endtabs %}

#### `watch`

| Expected type | Required | Default value |
| :--- | :--- | :--- |
| `boolean` | No | `true` |

 Determines if the watcher should start watching immediately. Default to `true` but if set to `false`, the watcher can be activated _later_ with the [`.watch()`](hitbox-object.md#watch) method

{% tabs %}
{% tab title="Example" %}
```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    watch: false
})
```
{% endtab %}
{% endtabs %}

#### `debug`

| Expected type | Required | Default value |
| :--- | :--- | :--- |
| `boolean` | No | `false` |

Enables [debugging mode](../advanced/debug.md) if set to `true`.

{% tabs %}
{% tab title="Example" %}
```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    debug: true
})
```
{% endtab %}
{% endtabs %}

#### `minOverlap`

| Expected type | Required | Default value |
| :--- | :--- | :--- |
| `number`between 0 and 1 | No | `0` |

Defines the minimum [`overlap`](collision-object.md#overlap) collision value required to fire an event. See the dedicated page.

{% page-ref page="../advanced/conditional-detection.md" %}

#### `onScreenOnly`

| Expected type | Required | Default value |
| :--- | :--- | :--- |
| `boolean` | No | `false` |

{% hint style="danger" %}
This _future_ feature is **still in development** and is not available in the released builds on NPM or via CDN.
{% endhint %}

If set to `true`, the collision events will only be triggered by elements that are visible on the screen. If an element is outside of the viewport, it will not be taken in account.

{% tabs %}
{% tab title="Example" %}
```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    onScreenOnly: true
})
```
{% endtab %}
{% endtabs %}

## Methods

### `.on(event, callback)`

| Argument | Type | Required |
| :--- | :--- | :--- |
| `event` | `string` | **Yes** |
| `callback` | `Function` | **Yes** |

Registers a function to be called when an event happens.

The `callback`function will be called whenever there is a collision, with a [`Collision`](collision-object.md) object as argument.

#### Possible values for `event`

There are 3 event types that you can register callbacks for:

* `collision`: called while the elements are colliding
* `collisionStart`called when the elements start colliding
* `collisionEnd`: called just after the elements stopped colliding

{% tabs %}
{% tab title="collision" %}
```javascript
hitboxWatcher.on('collision', function (collision) {
    // Do something with the collision object
})
```
{% endtab %}

{% tab title="collisionStart" %}
```javascript
hitboxWatcher.on('collisionStart', function (collision) {
    // Do something with the collision object
})
```
{% endtab %}

{% tab title="collisionEnd" %}
```javascript
hitboxWatcher.on('collisionEnd', function (collision) {
    // Do something with the collision object
})
```
{% endtab %}
{% endtabs %}

### `.onCollision(callback)`

| Argument | Type | Required |
| :--- | :--- | :--- |
| `callback` | `Function` | **Yes** |

Alias function for [`.on('collision', callback)`](hitbox-object.md#on-event-callback).

### `.onCollisionStart(callback)`

| Argument | Type | Required |
| :--- | :--- | :--- |
| `callback` | `Function` | **Yes** |

Alias function for [`.on('collisionStart', callback)`](hitbox-object.md#on-event-callback).

### `.onCollisionEnd(callback)`

| Argument | Type | Required |
| :--- | :--- | :--- |
| `callback` | `Function` | **Yes** |

Alias function for [`.on('collisionEnd', callback)`](hitbox-object.md#on-event-callback).

### `.watch()`

Enables the watcher if it was not already watching.

```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    watch: false
})
// Hitbox is not watching for collisions

hitboxWatcher.watch()

// Now, Hitbox is watching for collisions
```

### `.unwatch()`

Disables the watcher.

```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements'
})
// Hitbox is watching for collisions

hitboxWatcher.unwatch()

// Hitbox is not watching for collisions anymore
```

### `.setDebug(set)`

| Argument | Type | Required |
| :--- | :--- | :--- |
| `set` | `boolean` | **Yes** |

Enables or disables the [debugging mode](../advanced/debug.md) according to the `set` boolean value.

```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements'
})

hitboxWatcher.setDebug(true) // Debug mode is now enabled

hitboxWatcher.setDebug(false) // Debug mode is now disabled
```

