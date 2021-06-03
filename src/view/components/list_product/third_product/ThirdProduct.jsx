import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import ps4 from '../../../../images/ps4-pro-image-block-01-en-24jul20.png'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export { ThirdProduct }

function ThirdProduct() {
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
        var element = i
        element.remove()
    }
    return {
        view: () => (
            <div class='product_list' id='i'>
                <div class='main_area'>
                    <div class='ps_area'>
                        <img src={ps4} class="ps"/>
                    </div>
                    <div class='subarea'>
                        <div class='info_area'>
                            <div class='img_inform'>
                                <div class='prod_info'>
                                    Игровая приставка Sony
                                    <br/>
                                    PlayStation 4 Pro 1 TB черный
                                    <div class='name_company'>FAMILY</div>
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
                                <div class='price'>264 667тг</div>
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