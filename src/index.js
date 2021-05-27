let m = require("mithril");
var root = document.body;

import "./view/components/my-component/MyComponent.css";

// import { MyComponent } from './view/components/my-component/MyComponent';
 
import arrow from "./images/7.png";
import truck from "./images/Frame 52.png"
import washer from "./images/IMAGE 2020-10-21 17_10_03 4.png"

m.render(root, [
    m("div", {class: "blog_basket"}, [
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
            "Доставка будет",
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
        m("div.dirst_area1", [
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
                                src: "./images/Minus Disabled.png"
                            })
                        ]),
                        m("div.amount_area", [
                            m("div.amount", "1")
                        ]),
                        m("img.plus", {
                            src: "Plus Enabled.png"
                        }),
                        m("div.thing", "шт.")
                    ])
                ]),
                m("div.washer_price_delete", [
                    m("div.washer_price", "169 990тг"),
                    m("div.delete", "Удалить")
                ])
            ])
        ])
    ]),
    m("div.maindiv3_1", [
        m("div.poddiv3", [
            m("img.png1_1_1", {
                src: "/images/IMAGE 2020-10-21 10_08_59 3.png"
            }),
            m("div.text5_1_1", [
                "Книга Найт Ф.:",
                m("br"),
                "Продавец обуви",
                m("br"),
                "История компании Nike,",
                m("br"),
                "расказанная",
                m("br"),
                "ее основателем",
                m("div.podtext5_1_1", "МЕЛОМАН-MARWIN"),
                m("div.text6_1_1", "2 850тг")
            ]),   
        ]),
        m("div.poddiv3_1_1", [
            m("img.png2", {
                src: "/images/Minus Disabled.png"
            }),
            m("div.text6_1", "1"),
            m("img.png3", {
                src: "/images/Plus Enabled.png"
            }),
            m("div.text6_2", "шт."),
            m("div.text7", "Удалить")
        ])
    ]),
    m("div4.maindiv4", [
        m("button.but", [
            m("div.text8", "Продолжить"),
            m("div.podtext8", "1 товар, 169 990тг")
        ])
    ]),
    m("div.maindiv5", [
        m("div.poddiv5", [
            m("img.png4", {
                src: "/images/Group 6.png"
            }),
            m("div.text9", "Главная")
        ]),
        m("div.poddiv5_2", [
            m("img.png4_2", {
                src: "/images/Frame 1099.png"
            }),
            m("div.text9_2", "Каталог")
        ]),
        m("div.poddiv5_3", [
            m("img.png4_3", {
                src: "/images/For You"
            }),
            m("div.text9_3", "Избранное")
        ]),
        m("div.poddiv5_4", [
            m("div", [
                m("img.png4_4", {
                    src: "/images/Combined Shape.png"
                }),
                m("img", {
                    src: "/images/1.png"
                })
            ]),
            m("div.text9", "Корзина")
        ]),
        m("div.poddiv5_5", [
            m("img.png4_5", {
                src: "/images/Combined Shape1.png"
            }),
            m("div.text9_5", "Мои заказы")
        ])
    ])
])