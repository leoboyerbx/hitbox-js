# Static vs dynamic targets

{% hint style="danger" %}
Désolé, cette page n'est pas encore traduite en français. [Vous pouvez aider !](https://github.com/leoboyerbx/hitbox-js/blob/masterfr/docs/api/hitbox-object.md)
{% endhint %}

When creating a watcher with Hitbox, you provide a [`elements`](../api/hitbox-object.md#elements) parameter \(and possibly a [`targetElements`](../api/hitbox-object.md#targetelements) parameter\) that determines the elements you want to watch.

The type of this argument matters if you need to watch elements added to the DOM later:

* If this element is a `Node` or a `NodeList` \(typically provided by `document.querySelector()` and `document.querySelectorAll()` functions\), the targets will be static. This means that if you add an element after the initialization of the watcher, it won't be taken in account.
* If this element is a `string` representing a CSS selector, the targets will be dynamic: if you add later an element matching the selector, it will be taken in account for collisions detection.

