import m from 'mithril'

import './_blog-product-list.scss'
import '../my-component/MyComponent.scss'
import {Product} from './seventh_product/SeventhProduct.jsx'

export class ProductsList {

    view (vnode) {
        // const numbers = [...Array(10)]
        // const ListItems = numbers.map((number) =>
        //     <li key={ number.id }>
        //         <Product/>
        //     </li>
        // )
        this.prod = vnode.attrs.text
        this.prod = posts.map((post) =>
            <li key={ this.id }>
                <Product/>
            </li>
        )
        console.log(posts)
        return  (
            <div>
                <ul>
                    { this.prod }
                </ul>
                <div class='empty'></div>
            </div>
        )
    }
}
const posts = [
    {id: 1, text:'Смартфон Apple'},
    {id: 2, text: 'Игровая приставка'}
]