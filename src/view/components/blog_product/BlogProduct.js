import m from 'mithril'

import './_blog-product.scss'
import '../my-component/MyComponent.scss'

export class Product{
    view({ attrs }) {
        return m("div.blog_product", [
            m("span.total_products", [
                "В корзине: ",
                m("span.bold", [
                    m('span', '1 '),
                    'товар'
                ])
            ]),
            m("span.total_price", [
                "Всего: ",
                m("span.bold", attrs.name)
            ])
        ])
    }
}