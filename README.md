<h1 align="center">HitboxJS</h1>
<p align="center">
  <a href="https://github.com/leoboyerbx/hitbox-js/actions?query=workflow%3ACI">
    <img src="https://github.com/leoboyerbx/hitbox-js/workflows/CI/badge.svg" />
  </a>
  <a href="https://badge.fury.io/js/hitbox-js">
    <img src="https://badge.fury.io/js/hitbox-js.svg" alt="NPM Package" />
  </a>
</p>
<p align="center">
  <span>Simple JavaScript library to detect collisions between DOM elements</span>
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/leoboyerbx/hitbox-js/master/docs/.gitbook/assets/debug.gif" />

## What is HitboxJS ?

HitboxJS is a JS library that can help you detect collisions or intersections between **elements in your DOM**.



It can be used if your are building complex interfaces with, for example, rectangle selection, or if you're building a game*.

> *If you are building a game, you are probably using a canvas so this library is not for you (and if not, maybe you should consider switching to canvas [for performance reasons](https://stackoverflow.com/questions/38901951/canvas-vs-svg-for-games)). HitboxJS only detects collisions and intersection **between DOM Elements**.

‌

HitboxJS watches your elements and fires an event when **two elements** collide.

Learn to use HitboxJS by reading [the documentation](https://docs.hitbox.cf/).



## Installation

### In the browser

To import HitboxJS, simply place this tag before your script.  

```markup
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hitbox-js/dist/hitbox.dist.js"></script>  

<!-- Then you can import your script -->  
<script type="text/javascript" src="my.script.js"></script>  
```

## With a module bundler

If you are using a module bundler like Webpack or Parcel, you need to add Hitbox as a dependency of your project.  

```bash
npm install --save hitbox-js  
```

Then you need to import it in your JS file  

```javascript
import Hitbox from 'hitbox-js'  
```
