import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import iphone11 from '../../../../images/iphone_11_PNG38.png'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export { SeventhProduct }

function SeventhProduct() {
    var count = 0
    function increment() {
        count +=1
    }
    function decrement() {
        if (count <= 0){
            return;
        }
        else{
            count -=1
        }
    } 
    function remove() {
        var element = q
        element.remove()
    }
    return {
        view: () => (
            <div class='product_list' id='q'>
                <div class='main_area'>
                    <div class='iphone11_area'>
                        <img src={iphone11} class="iphone11"/>
                    </div>
                    <div class='subarea'>
                        <div class='info_area'>
                            <div class='img_inform'>
                                <div class='prod_info'>
                                    Смартфон Apple
                                    <br/>
                                    iPhone 11 128Gb Slim
                                    <br/>
                                    Box черный
                                    <div class='name_company'>iMobile</div>
                                </div>
                            </div>
                            <div class='icons_area'>
                                <div class='minus_area'>
                                    <img src={minus} class='minus' onclick={ decrement }/>
                                </div>
                                <div class='amount_area'>
                                    <div class='amount'>{ count }</div>
                                </div>
                                <img src={plus} class='plus' onclick={ increment }/>
                                <div class='thing'>шт.</div>
                            </div>
                        </div>
                        <div class='price_delete'>
                            <div class='price_area'>
                                <div class='price'>99 890тг</div>
                            </div>
                            <div class='delete_area'>
                                <div class='delete' onclick={remove}>Удалить</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}