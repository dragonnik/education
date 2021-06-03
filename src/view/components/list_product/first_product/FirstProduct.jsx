import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import washer from "../../../../images/IMAGE 2020-10-21 17_10_03 4.png"
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export { FirstProduct }

function FirstProduct(){
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
        var element = b
        element.remove()
    }
    return{
        view: () => (
            <div class='product_list' id='b'>
                <div class='main_area'>
                    <div class='washer_area'>
                        <img src={washer} class='washer'/>
                    </div>
                    <div class='subarea'>
                        <div class='info_area'>
                            <div class='img_inform'>
                                <div class='prod_info'>
                                    Стиральная машина LG
                                    <br/>
                                    F1296HDS4серебристый
                                    <div class='name_company'>SMARTY</div>
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
                                <div class='price'>169 990тг</div>
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