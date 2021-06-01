import m from 'mithril'

import './_blog-product-list.scss'
import '../my-component/MyComponent.scss'
import washer from "../../../images/IMAGE 2020-10-21 17_10_03 4.png"
import minus from "../../../images/Minus Disabled.png"
import plus from "../../../images/Plus Enabled.png"
import book from "../../../images/IMAGE 2020-10-21 10_08_59 3.png"

export class ProductsList{
    view({ attrs }) {
        return m("div", [
            m("div.blog_product1", [
                m("div.first_area1", [
                    m("div.washer_area", [
                        m("img.washer", {
                            src: washer
                        })
                    ]),
                    m("div.subarea", [
                        m("div.info_area", [
                            m("div.washer_inform", [
                                m("div.washer_text", [
                                    "Стиральная машина LG",
                                    m("br"),
                                    "F1296HDS4серебристый",
                                    m("div.washer_podtext", attrs.name)
                                ])
                            ]),
                            m("div.icons_area", [
                                m("div.minus_area", [
                                    m("img.minus", {
                                        src: minus
                                    })
                                ]),
                                m("div.amount_area", [
                                    m("div.amount", "1")
                                ]),
                                m("img.plus", {
                                    src: plus
                                }),
                                m("div.thing", "шт.")
                            ])
                        ]),
                        m("div.washer_price_delete", [
                            m("div.price_area", [
                                m("div.washer_price", "169 990тг")
                            ]),
                            m("div.delete_area", [
                                m("div.delete", "Удалить")
                            ])
                        ])
                    ])
                ])
            ]),
            m("div.blog_product1", [
                m("div.first_area1", [
                    m("div.washer_area", [
                        m("img.book", {
                            src: book
                        }),
                    ]),
                    m("div.subarea", [
                        m("div.info_area", [
                            m("div.washer_inform", [
                                m("div.washer_text", [
                                    "Книга Найт Ф.:",
                                    m("br"),
                                    "Продавец обуви",
                                    m("br"),
                                    "История компании Nike,",
                                    m("br"),
                                    "расказанная",
                                    m("br"),
                                    "ее основателем",
                                    m("div.washer_podtext", 'МЕЛОМАН-MARWIN'),
                                ])
                            ]),
                            m('div.icons_area', [
                                m("div.minus_area", [
                                    m("img.minus", {
                                        src: minus
                                    })
                                ]),
                                m("div.amount_area", [
                                    m("div.amount", "1")
                                ]),
                                m("img.plus", {
                                    src: plus
                                }),
                                m("div.thing", "шт.")
                            ])
                        ]),
                        m("div.washer_price_delete", [
                            m("div.washer_price", "2 850тг"),
                            m("div.delete", "Удалить")
                        ])
                    ])
                ])
            ]),
            m('div.empty')
        ])
    }
}