# Conditional detection

Sometimes you may want to detect only collisions in which there is an intersection between the 2 objects.

For example, you want to trigger collision events only when the colliding objects overlap at least 50%. You can achieve this by using the [`minOverlap`](../api/hitbox-object.md#minoverlap) parameter of the Hitbox constructor.

```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    minOverlap: 0.5
})
```

This will filter the collisions to the ones that have an [`overlap`](../api/collision-object.md#overlap) `>= 0.5`.

As a reminder, the overlap of a collision is a number between 0 and 1 representing the amount of overlap between the two elements \(0 is no collision and 1 is when an element  completely overlaps the other\)

| ![](../.gitbook/assets/overlap0.png) | ![](../.gitbook/assets/overlap0.36.png) | ![](../.gitbook/assets/overlap1.png) |
| :--- | :--- | :--- |
| _`overlap = 0`_ | _`overlap = 0.36`_ | _`overlap = 1`_ |

