import m from 'mithril';

import '../components/my-component/MyComponent.scss'
import '../components/blog_basket/_blog-basket.scss'
import '../components/blog_delivery/_blog-delivery.scss'
import '../components/blog_product/_blog-product.scss'
import '../components/list_product/_blog-product-list.scss'
import '../components/button2.0/_button2-0.scss'
import '../components/button/_button.scss'
import '../components/navbar/_navbar.scss'
import { BlogBasket } from '../components/blog_basket/BlogBusket.jsx'
import { BlogDelivery } from '../components/blog_delivery/BlogDelivery.jsx'
import { BlogProduct } from '../components/blog_product/BlogProduct.jsx'
import { ProductsList } from '../components/list_product/ProductsList.jsx'
import { ContainerFixed } from '../components/button2.0/Button2-0.jsx'
import { Button } from '../components/button/ButtonComponent.jsx'
import { NavBar } from '../components/navbar/NavBar.jsx'

export class MyComponent {
    view () {
        return (
            <div>
                <BlogBasket/>
                <BlogDelivery/> 
                <BlogProduct/>
                <ProductsList/> 
                <ContainerFixed>
                    <Button/>
                    <NavBar/>
                </ContainerFixed>
            </div>
        )
    }
}
m.mount(document.body, MyComponent)