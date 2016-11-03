import hasTouchEvents from './touch-events';

function detectFeatures() {

    if (typeof window === 'undefined') {
        return;
    }

    const html = document.getElementsByTagName('html')[0];
    if (!html) {
        return;
    }

    html.classList.remove('no-js');
    html.classList.add('js');

    const touchEventsPrefix = hasTouchEvents() ? '' : 'no-';
    html.classList.add(`${touchEventsPrefix}touchevents`);

}

export default detectFeatures;
