import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import s10 from '../../../../images/s10-white.png'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export { FourthProduct }

function FourthProduct() {
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
        var element = c
        element.remove()
    }
    return {
        view: () => (
            <div class='product_list' id='c'>
                <div class='main_area'>
                    <div class='s10_area'>
                        <img src={s10} class="s10"/>
                    </div>
                    <div class='subarea'>
                        <div class='info_area'>
                            <div class='img_inform'>
                                <div class='prod_info'>
                                    Смартфон Samsung
                                    <br/>
                                    Galaxy S10
                                    <br/>
                                    6/128Gb белый
                                    <div class='name_company'>MEGAPHONE</div>
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
                                <div class='price'>198 000тг</div>
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