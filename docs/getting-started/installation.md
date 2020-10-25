# Installation

Pour utiliser HitboxJS, il vous faut l'installer dans votre projet.

## Dans le navigateur

Pour importer HitboxJS, placez simplement cette balise avant d'importer votre script.

```markup
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hitbox-js/dist/hitbox.dist.js"></script>

<!-- Ensuite vous pouvez importer votre script -->
<script type="text/javascript" src="my.script.js"></script>
```

Une fois cette étape accomplie, vous pouvez démarrer.

{% page-ref page="quickstart.md" %}

## Avec un _module bundler_

Si vous utilisez un empaqueteur d'application \(_module bundler_\) comme Webpack ou Parcel, vous devez ajouter Hitbox en tant que dépendance de votre projet.

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

Ensuite, vous pouvez importer Hitbox dans votre application.

```javascript
import Hitbox from 'hitbox-js'
```

Et vous être prêt pour démarrer

