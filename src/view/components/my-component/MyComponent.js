import m from 'mithril';

import './MyComponent.scss'
// import './MyComponent.css';

import truck from "../../../images/Frame 52.png"
import arrow from "../../../images/7.png";
import washer from "../../../images/IMAGE 2020-10-21 17_10_03 4.png"
import minus from "../../../images/Minus Disabled.png"
import plus from "../../../images/Plus Enabled.png"
import book from "../../../images/IMAGE 2020-10-21 10_08_59 3.png"
import house from "../../../images/Group 6.png"
import search from "../../../images/Frame 1099.png"
import heart from "../../../images/For You.png"
import basket from "../../../images/Combined Shape.png"
import amount from "../../../images/1.png"
import list from "../../../images/Combined Shape1.png"
import { Button } from '../button/ButtonComponent';
export class MyComponent {
    view() {
        return m("div", { name: "MyComponent"}, [
            m("div.blog_basket", [
            m("div", {class: "arrow_area"}, [
                m("img.arrow", {
                    src: arrow
                }),
            ]),
            m("div", {class: "basket_area"}, [
                m("div", {class: "basket"}, "Корзина")
            ])
        ]),
        m("div", {class: "blog_delivery"}, [
            m("div", {class: "truck_area"}, [
                m("img.truck", {
                    src: truck 
                }),
            ]),
            m("div", {class: "delivery"}, [
                "Доставка будет ",
                m("span.bold", "бесплатной")
            ]),
        ]),
        m("div", {class: "blog_product"}, [
            m("span.total_products", [
                "В корзине: ",
                m("span", {class: "bold"}, "1 товар")
            ]),
            m("span.total_price", [
                "Всего: ",
                m("span", {class: "bold"}, "169 990тг")
            ])
        ]),
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
                                m("div.washer_podtext", "SMARTY")
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
                                m("div.washer_podtext", "МЕЛОМАН-MARWIN"),
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
            ]),
        ]),
        m(Button, { name: 'Button' }),
        m("div.maindiv5", [
            m("div.poddiv5", [
                m("img.png4", {
                    src: house
                }),
                m("div.text9", "Главная")
            ]),
            m("div.poddiv5_2", [
                m("img.png4_2", {
                    src: search
                }),
                m("div.text9", "Каталог")
            ]),
            m("div.poddiv5_3", [
                m("img.png4_3", {
                    src: heart
                }),
                m("div.text9", "Избранное")
            ]),
            m("div.poddiv5_4", [
                m("div.basket_amount", [
                    m("img.png4_4", {
                        src: basket
                    }),
                    m("img.png4_4_1", {
                        src: amount
                    })
                ]),
                m("div.text9", "Корзина")
            ]),
            m("div.poddiv5_5", [
                m("img.png4_5", {
                    src: list
                }),
                m("div.text9", "Мои заказы")
            ])
        ])
        ])
    }
} 