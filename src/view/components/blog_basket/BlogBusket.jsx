import m from 'mithril';

import './_blog-basket.scss'

import arrow from '../../../images/7.png'
import '../my-component/MyComponent.scss'
export { BlogBasket }

function BlogBasket() {
    return {
        view: () => (
            <div class='blog_basket'>
                <div class='arrow_area'>
                    <img src={ arrow } class='arrow'/>
                </div>
                <div class='basket_area'>
                    <div class='basket'>Корзина</div>
                </div>
            </div>
        )
    }
}
m.mount(document.body, BlogBasket)