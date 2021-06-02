import m from 'mithril'

import './_blog-product-list.scss'
import '../my-component/MyComponent.scss'
import washer from "../../../images/IMAGE 2020-10-21 17_10_03 4.png"
import minus from "../../../images/Minus Disabled.png"
import plus from "../../../images/Plus Enabled.png"
import book from "../../../images/IMAGE 2020-10-21 10_08_59 3.png"
export { ProductsList }

function ProductsList() {
    return {
        view: () => (
            <div>
                <div class='blog_product1'>
                    <div class='first_area1'>
                        <div class='washer_area'>
                            <img src={washer} class='washer'/>
                        </div>
                        <div class='subarea'>
                            <div class='info_area'>
                                <div class='washer_inform'>
                                    <div class='washer_text'>
                                        Стиральная машина LG
                                        <br/>
                                        F1296HDS4серебристый
                                        <div class='washer_podtext'>SMARTY</div>
                                    </div>
                                </div>
                                <div class='icons_area'>
                                    <div class='minus_area'>
                                        <img src={minus} class='minus'/>
                                    </div>
                                    <div class='amount_area'>
                                        <div class='amount'>1</div>
                                    </div>
                                    <img src={plus} class='plus'/>
                                    <div class='thing'>шт.</div>
                                </div>
                            </div> 
                            <div class='washer_price_delete'>
                                <div class='price_area'>
                                    <div class='washer_price'>169 990тг</div>
                                </div>
                                <div class='delete_area'>
                                    <div class='delete'>Удалить</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='blog_product1'>
                    <div class='first_area1'>
                        <div class='book_area'>
                            <img src={book} class='book'/>
                        </div>
                        <div class='subarea'>
                            <div class='info_area'>
                                <div class='washer_inform'>
                                    <div class='washer_text'>
                                    Книга Найт Ф.:
                                    <br/>
                                    Продавец обуви
                                    <br/>
                                    История компании Nike,
                                    <br/>
                                    расказанная
                                    <br/>
                                    ее основателем
                                    <div class='washer_podtext'>МЕЛОМАН-MARWIN</div>
                                    </div>
                                </div>
                                <div class='icons_area'>
                                    <div class='minus_area'>
                                        <img src={minus} class='minus'/>
                                    </div>
                                    <div class='amount_area'>
                                        <div class='amount'>1</div>
                                    </div>
                                    <img src={plus} class='plus'/>
                                    <div class='thing'>шт.</div>
                                </div>
                            </div>
                            <div class='washer_price_delete'>
                                <div class='washer_price'>2 859тг</div>
                                <div class='delete'>Удалить</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='empty'></div>
            </div>
        )
    }
}
m.mount(document.body, ProductsList)