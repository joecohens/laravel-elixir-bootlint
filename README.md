# laravel-elixir-bootlint

Simple extension to *laravel elixir* to lint bootstrap with *bootlint*.

## Install

```
npm install --save-dev laravel-elixir-bootlint
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require("laravel-elixir");

require("laravel-elixir-bootlint");

elixir(function(mix) {
    mix.bootlint("resources/views/index.blade.php");
});

```
First argument is the entry point of your application _(default directory is resources/assets/js)_. In third argument you could pass bootlint options. In production bundle will be compressed.

#### Advanced example

```javascript
elixir(function(mix) {
    mix.bootlint("resources/views/index.blade.php", {
        stoponerror: true,
        stoponwarning: true,
    });
});
```
