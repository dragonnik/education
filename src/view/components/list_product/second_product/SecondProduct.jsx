import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"
import book from "../../../../images/IMAGE 2020-10-21 10_08_59 3.png"

export { SecondProduct }

function SecondProduct() {
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
        var element = a
        element.remove()
    }
    return{
        view: () => (
            <div class='product_list' id='a'>
                    <div class='main_area'>
                        <div class='book_area'>
                            <img src={book} class='book'/>
                        </div>
                        <div class='subarea'>
                            <div class='info_area'>
                                <div class='img_inform'>
                                    <div class='prod_info'>
                                    Книга Найт Ф.:
                                    <br/>
                                    Продавец обуви
                                    <br/>
                                    История компании Nike,
                                    <br/>
                                    расказанная
                                    <br/>
                                    ее основателем
                                    <div class='name_company'>МЕЛОМАН-MARWIN</div>
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
                                <div class='price'>2 859тг</div>
                                <div class='delete'onclick={remove}>Удалить</div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}