import m from 'mithril';

import house from "../../../images/Group 6.png"
import search from "../../../images/Frame 1099.png"
import heart from "../../../images/For You.png"
import basket from "../../../images/Combined Shape.png"
import amount from "../../../images/1.png"
import list from "../../../images/Combined Shape1.png"
import './_navbar.scss'

export class NavBar{
    view({ attrs }){
        return m("div.maindiv5", [
            m("div.poddiv5", [
                m("img.png4", {
                    src: house
                }),
                m("div.text9", attrs.name)
            ]),
            m("div.poddiv5", [
                m("img.png4_2", {
                    src: search
                }),
                m("div.text9", "Каталог")
            ]),
            m("div.poddiv5", [
                m("img.png4_3", {
                    src: heart
                }),
                m("div.text9", "Избранное")
            ]),
            m("div.poddiv5", [
                m("div.basket_amount", [
                    m("img.png4_4", {
                        src: basket
                    }),
                    m("img.png4_4_1", {
                        src: amount
                    })
                ]),
                m("div.text9_4", "Корзина")
            ]),
            m("div.poddiv5", [
                m("img.png4_5", {
                    src: list
                }),
                m("div.text9", "Мои заказы")
            ])
        ])
    }
}