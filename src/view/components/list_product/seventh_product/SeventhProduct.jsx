import m from 'mithril'

import '../_blog-product-list.scss'
import '../../my-component/MyComponent.scss'
import minus from "../../../../images/Minus Disabled.png"
import plus from "../../../../images/Plus Enabled.png"

export class Product{
    constructor(vnode) {
        this.count = 0
        this.content = vnode.attrs.name
        this.text = vnode.attrs.text
    }
    increment() {
        this.count +=1
    }
    decrement() {
        if (this.count <= 0){
            return;
        }
        else{
            this.count -=1
        }
    } 
    remove() {
        this.element = q
        this.element.remove()
    }
    view(vnode) {
        return(
            <div class='product_list'>
                    <div class='main_area'>
                        <div class='iphone11_area'>
                            <img src='https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h99/26542863613982/apple-iphone-11-128gb-slim-box-cernyj-100692388-1.png' class="iphone11"/>
                        </div>
                        <div class='subarea'>
                            <div class='info_area'>
                                <div class='img_inform'>
                                    <div class='prod_info'>
                                        { this.content }
                                        <br/>
                                        { this.text }
                                    </div>
                                </div>
                                <div class='icons_area'>
                                    <div class='minus_area'>
                                        <img src={minus} class='minus' onclick={ () => { this.decrement() } }/>
                                    </div>
                                    <div class='amount_area'>
                                        <div class='amount'>{ this.count }</div>
                                    </div>
                                    <img src={plus} class='plus' onclick={ () => { this.increment() } }/>
                                    <div class='thing'>шт.</div>
                                </div>
                            </div>
                            <div class='price_delete'>
                                <div class='price_area'>
                                    <div class='price'>99 890тг</div>
                                </div>
                                <div class='delete_area'>
                                    <div class='delete' onclick={ () => { this.remove() } }>Удалить</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )   
    }
}