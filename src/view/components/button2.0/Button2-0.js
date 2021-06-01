import m from 'mithril'

import './_button2-0.scss'

export class ContainerFixed{
    view({ attrs, children }){
        return m('div.button', [
            m('div', attrs.name),
            children,
        ])
    }
}