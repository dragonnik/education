import m from 'mithril'

import './_blog-product-list.scss'
import '../my-component/MyComponent.scss'
import {Product} from './seventh_product/SeventhProduct.jsx'

export class ProductsList {
    view () {
        console.log(posts)
        return  (
            <div>
                <ul>
                    { posts.map((post) =>
                        <li key={ post.id }>
                            <Product name={ post.content } text={ post.text }>
                                {this.content}
                                {this.text}
                            </Product>
                        </li>
                    )}
                </ul>
                <div class='empty'></div>
            </div>
        )
    }
}
const posts = [
    {id: 1, content: 'Смартфон Apple', text: 'iPhone 11 128Gb Slim'},
    {id: 2, content: 'Sony'},
    {id: 3}
]