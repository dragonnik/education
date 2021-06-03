import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import ps5 from '../../../../images/ps5-photo.png'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export { FifthProduct }

function FifthProduct() {
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
        var element = s
        element.remove()
    }
    return {
        view: () => (
            <div class='product_list' id='s'>
                <div class='main_area'>
                    <div class='ps5_area'>
                        <img src={ps5} class="ps5"/>
                    </div>
                    <div class='subarea'>
                        <div class='info_area'>
                            <div class='img_inform'>
                                <div class='prod_info'>
                                    Игровая приставка
                                    <br/>
                                    Sony PlayStation5
                                    <br/>
                                    белый
                                    <div class='name_company'>SONY-DOM</div>
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
                                <div class='price'>436 875тг</div>
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