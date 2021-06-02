import m from 'mithril'

import './_blog-delivery.scss'
import truck from '../../../images/Frame 52.png'
import '../my-component/MyComponent.scss'
export { BlogDelivery }

function BlogDelivery() {
    return {
        view: () => (
            <div class='blog_delivery'>
                    <div class='truck_area'>
                        <img src={truck} class='truck'/>
                    </div>
                    <div class='delivery'>
                        Доставка будет
                        <span class='bold'> бесплатной</span>
                    </div>
            </div>
        )
    }
}
m.mount(document.body, BlogDelivery)