# Installation

First of all, you need to install HitboxJS in your project.

## In the browser

To import HitboxJS, simply place this tag before your script.

```markup
<script type="text/javascript" src="CDN"></script>

<!-- Then you can import your script -->
<script type="text/javascript" src="my.script.js"></script>
```

Once this is done, you can start using Hitbox.

{% page-ref page="basic-example.md" %}

## With a module bundler

If you are using a module bundler like Webpack or Parcel, you need to add Hitbox as a dependency of your project.

{% tabs %}
{% tab title="NPM" %}
```bash
npm install --save hitbox-js
```
{% endtab %}

{% tab title="Yarn" %}
```text
yarn add hitbox-js
```
{% endtab %}
{% endtabs %}

Then you need to import it in your JS file

```javascript
import Hitbox from 'hitbox-js'
```

And your're ready to go !

