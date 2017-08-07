/**
 * Avoid `console` errors in browsers that lack a console
 * and add console.time implementation for IE.
 *
 * @file
 * @module
 *
 * @version 0.0.1
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */
(function (win) {
    var method,
        noop = function () {},
        methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table',
            'timeStamp', 'trace', 'warn'
        ],
        length = methods.length,
        console = (win.console = win.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}(typeof window !== 'undefined' ? window : {}));

if (typeof window !== 'undefined' && window.console && typeof (window.console.time) == 'undefined') {
    console.time = function (name, reset) {
        if (!name) {
            return;
        }
        var time = new Date().getTime();
        if (!console.timeCounters) {
            console.timeCounters = {};
        };
        var key = 'KEY' + name.toString();
        if (!reset && console.timeCounters[key]) {
            return;
        }
        console.timeCounters[key] = time;
    };

    console.timeEnd = function (name){
        var time = new Date().getTime();
        if (!console.timeCounters) {
            return;
        }
        var key = 'KEY' + name.toString();
        var timeCounter = console.timeCounters[key];
        if (timeCounter) {
            var diff = time - timeCounter;
            var label = name + ': ' + diff + 'ms';
            console.info(label);
            delete console.timeCounters[key];
        }
        return diff;
    };
}
