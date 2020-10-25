# The Collision object

{% hint style="danger" %}
Désolé, cette page n'est pas encore traduite en français. [Vous pouvez aider !](https://github.com/leoboyerbx/hitbox-js/blob/masterfr/docs/api/hitbox-object.md)
{% endhint %}

When Hitbox detects a collision between two elements, it calls the user-defined functions, giving them a `Collision` object as parameter. This object has many useful properties

### `elements`

| Type |
| :--- |
| `array` |

An array containing the 2 elements concerned by the collision

### `element`

| Type |
| :--- |
| `Node` |

One of the two elements concerned by the collision.

If you provided the [`targetElements`](hitbox-object.md#targetelements) parameter to the constructor, this element will be from the set of elements you provided with the [`elements`](hitbox-object.md#elements) parameter.

### `targetElement`

| Type |
| :--- |
| `Node` |

The other element concerned by the collision.

If you provided the [`targetElements`](hitbox-object.md#targetelements) parameter to the constructor, this element will be from the set of elements you provided with the [`targetElements`](hitbox-object.md#targetelements) parameter.

### `overlap`

| Type |
| :--- |
| `number` |

A number between 0 and 1 representing the amount of overlap between the two elements \(0 is no collision and 1 is when an element  completely overlaps the other\)

| ![](../.gitbook/assets/overlap0.png) | ![](../.gitbook/assets/overlap0.36.png) | ![](../.gitbook/assets/overlap1.png) |
| :--- | :--- | :--- |
| _`overlap = 0`_ | _`overlap = 0.36`_ | _`overlap = 1`_ |

### `top`

| Type |
| :--- |
| `number` |

The distance from the **top** of the viewport of the colliding area.

### `left`

| Type |
| :--- |
| `number` |

The distance from the **left** of the viewport of the colliding area.

### `width`

| Type |
| :--- |
| `number` |

The **width** of the colliding area.

### `height`

| Type |
| :--- |
| `number` |

The **width** of the colliding area.

### `area`

| Type |
| :--- |
| `number` |

The **area in px²** of the colliding area.

