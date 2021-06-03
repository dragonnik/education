import m from 'mithril'

import './_blog-product-list.scss'
import '../my-component/MyComponent.scss'
import { FirstProduct } from './first_product/FirstProduct.jsx'
import { SecondProduct } from './second_product/SecondProduct.jsx'
import { ThirdProduct } from './third_product/ThirdProduct.jsx'
import { FourthProduct } from './fourth_product/FourthProduct.jsx'
import { FifthProduct } from './fifth_product/FifthProduct.jsx'
import { SixthProduct } from './sixth_product/SixthProduct.jsx'
import { SeventhProduct } from './seventh_product/SeventhProduct.jsx'
export { ProductsList }

function ProductsList() {
    return {
        view: () => (
            <div>
                <ul>
                    <FirstProduct/>
                    <SecondProduct/>
                    <ThirdProduct/>
                    <FourthProduct/>
                    <FifthProduct/>
                    <SixthProduct/>
                    <SeventhProduct/>
                </ul>
                <div class='empty'></div>
            </div>
        )
    }
}