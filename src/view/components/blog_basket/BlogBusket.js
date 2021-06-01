import m from 'mithril';

import './_blog-basket.scss'

import arrow from '../../../images/7.png'
import '../my-component/MyComponent.scss'

export class Basket{
    view({ attrs }){
        return m("div.blog_basket", [
            m("div.arrow_area", [
                m("img.arrow", {
                    src: arrow
                }),
            ]),
            m("div.basket_area", [
                m("div.basket", attrs.name)
            ])
        ])
    }
}