import m from 'mithril'

import './_blog-delivery.scss'
import truck from '../../../images/Frame 52.png'
import '../my-component/MyComponent.scss'

export class Delivery{
    view({ attrs }) {
        return m("div", {class: "blog_delivery"}, [
            m("div", {class: "truck_area"}, [
                m("img.truck", {
                    src: truck 
                }),
            ]),
            m("div", {class: "delivery"}, [
                "Доставка будет ",
                m("span.bold", attrs.name)
            ]),
        ])
    }
}