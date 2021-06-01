import m from 'mithril';

import '../components/my-component/MyComponent.scss'


import { Button } from '../components/button/ButtonComponent'
import { Basket } from '../components/blog_basket/BlogBusket'
import { Delivery } from '../components/blog_delivery/BlogDelivery'
import { Product } from '../components/blog_product/BlogProduct'
import { ProductsList } from '../components/list_product/ProductsList'
import { NavBar } from '../components/navbar/NavBar';
import { ContainerFixed } from '../components/button2.0/Button2-0'

export class MyComponent {
    view() {
        return m("div", { name: "MyComponent"}, [
            m(Basket, { name: 'Корзина' }),
            m(Delivery, { name: 'бесплатной' }),
            m(Product, { name: '169 990тг' }),
            m(ProductsList, { name: 'SMARTY' }),
            
            m(ContainerFixed, [
                m(Button, { name: 'Продолжить' }),
                m(NavBar, { name: 'Главная' }),
            ])
        ])
    }
} 