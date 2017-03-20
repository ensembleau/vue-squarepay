# aurora.

![Splash](/meta/splash.png)

A Vue oriented development framework with WebPack, SASS and Babel.

This framework is intended for use in developing rich Vue applications with WebPack, which allows
single-file component composition supporting ES6 JavaScript via Babel and SASS compilation. The
framework itself is lightweight, acting as the centre point of a collection of more specialised
packages.

## structure.

* `public` - Contains your public resources (images, compiled CSS and JavaScript, etc).
    * `public/dist` - Where your packaged CSS and JavaScript will end up.
* `src` - Contains your application source files (Vue components, ES6 JavaScript, SASS).
    * `src/components` - Contains single file Vue components.
    * `src/js` - Contains your JavaScript.
    * `src/scss` - Contains your SASS (SCSS) files.
        * `src/scss/partials` - Contains your SASS partials. Most of your SASS should be declared here and `@imported` from SASS files in the parent directory.

## packages.

Because the framework acts almost purely as a compiler rather than a collection of boilerplate CSS
and JavaScript; said CSS, JavaScript and even Vue components are dependencies of this package via
NPM. Those being:

* [aurora-css](https://github.com/MartyWallace/aurora-css) - The default SASS library included with Aurora.
    * [documentation](https://martywallace.github.io/aurora-css/).
* [aurora-ui](https://github.com/MartyWallace/aurora-ui) - Default UI related Vue components included with Aurora.

This approach allows components to be easily swapped out for preferred ones.

## setup.

All setup is provided by running:

    $ npm run setup

## development.

To compile your application (SASS -> CSS, WebPack, etc), run:

    $ npm run build