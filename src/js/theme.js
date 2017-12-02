try {
    window.$ = window.jQuery = require('jquery');

    let UIkit = require('uikit');
    let Icons = require('uikit/dist/js/uikit-icons');
    UIkit.use(Icons);
} catch (e) {}

