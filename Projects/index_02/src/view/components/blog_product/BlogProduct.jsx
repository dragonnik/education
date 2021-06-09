import m from 'mithril'

import './_blog-product.scss'
import '../my-component/MyComponent.scss'
export { BlogProduct }

function BlogProduct() {
    return {
        view: () => (
            <div class='blog_product'>
                    <span class='total_products'>
                        В корзине:
                        <span class='bold'> 1 товар</span>
                    </span>
                    <span class='total_price'>
                        Всего:
                        <span class='bold'> 169 990тг</span>
                    </span>
            </div>
        )
    }
}
m.mount(document.body, BlogProduct)