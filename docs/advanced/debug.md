# Debugging mode

{% hint style="danger" %}
Désolé, cette page n'est pas encore traduite en français. [Vous pouvez aider !](https://github.com/leoboyerbx/hitbox-js/blob/masterfr/docs/api/hitbox-object.md)
{% endhint %}

HitboxJS provides a very handy debugging mode to help you see the collisions. It highlights the current collisions in the DOM.

<table>
  <thead>
    <tr>
      <th style="text-align:left">
        <p></p>
        <p>
          <img src="../.gitbook/assets/debug1 (1).png" alt/>
        </p>
      </th>
      <th style="text-align:left">
        <p></p>
        <p>
          <img src="../.gitbook/assets/bounding3 (1).png" alt/>
        </p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

![](../.gitbook/assets/debug.gif)

You can enable the debugging mode by setting the `debug` parameter to true when creating your watcher.

```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements',
    debug: true
})
```

You can also use the [`setDebug()`](../api/hitbox-object.md#setdebug-set) method to enable or disable debugging mode at any time.

```javascript
const hitboxWatcher = new Hitbox({
    elements: '.my-elements'
})

hitboxWatcher.setDebug(true) // Debug mode is now enabled

hitboxWatcher.setDebug(false) // Debug mode is now disabled
```

