import m from 'mithril';

import './MyComponent.css';

export class MyComponent {
    view({ attrs }) {
        return m('dvi', attrs.name);
    }
} 