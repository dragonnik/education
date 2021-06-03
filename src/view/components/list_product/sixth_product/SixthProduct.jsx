import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import watchactive from '../../../../images/galaxy-watch-active2-water-proof-cloud-silver.png'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export { SixthProduct }

function SixthProduct() {
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
        var element = d
        element.remove()
    }
    return {
        view: () => (
            <div class='product_list' id='d'>
                <div class='main_area'>
                    <div class='watchactive_area'>
                        <img src={watchactive} class="watchactive"/>
                    </div>
                    <div class='subarea'>
                        <div class='info_area'>
                            <div class='img_inform'>
                                <div class='prod_info'>
                                    Смарт-часы Samsung
                                    <br/>
                                    Galaxy Watch Active2
                                    <br/>
                                    Aluminium SM-R830
                                    <br/>
                                    40mm Silver
                                    <div class='name_company'>EVRIKA</div>
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