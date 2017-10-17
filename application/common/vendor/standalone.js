/**
 * Don't open internal links in standalone iOS Mode in safari.
 * Prevents links from apps from oppening in mobile safari, this
 * javascript needs to be loaded as soon as possible.
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
    'use strict';

    var document = win.document,
        navigator = document && document.navigator;

    if (document && navigator && typeof navigator.standalone !== 'undefined' && navigator.standalone) {
        var curnode,
            location = document.location,
            stop = /^(a|html)$/i;

        document.addEventListener('click', function handleClick(e) {
            curnode = e.target;

            while (!(stop).test(curnode.nodeName)) {
                curnode = curnode.parentNode;
            }

            // Condidions to do this only on links to your own app
            // if you want all links, use if('href' in curnode) instead.
            if ('href' in curnode && (curnode.href.indexOf('http') || ~curnode.href.indexOf(location.host))) {
                e.preventDefault();
                location.href = curnode.href;
            }

        }, false);
    }
}(typeof window !== 'undefined' ? window : {}));
