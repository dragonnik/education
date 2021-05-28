import m from 'mithril';

import './_button.scss'

export class Button{
    view({ attrs }){
        return m("div4.maindiv4", [
            m("button.but", [
                m("div.text8", attrs.name),
                m("div.podtext8", "1 товар, 169 990тг")
            ])
        ])
    }
}