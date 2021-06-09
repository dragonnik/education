import m from 'mithril';

import house from "../../../images/Group 6.png"
import search from "../../../images/Frame 1099.png"
import heart from "../../../images/For You.png"
import basket from "../../../images/Combined Shape.png"
import amount from "../../../images/1.png"
import list from "../../../images/Combined Shape1.png"
import './_navbar.scss'
export { NavBar }

function NavBar() {
    return {
        view: () => (
            <div class='maindiv5'>
                <div class='poddiv5'>
                    <img src={house} class='png4'/>
                    <div class='text9'>Главная</div>
                </div>
                <div class='poddiv5'>
                    <img src={search} class='png4_2'/>
                    <div class='text9'>Каталог</div>
                </div>
                <div class='poddiv5'>
                    <img src={heart} class='png4_3'/>
                    <div class='text9'>Избранное</div>
                </div>
                <div class='poddiv5'>
                    <img src={basket} class='png4_4'/>
                    <img src={amount} class='png4_4_1'/>
                    <div class='text9'>Корзина</div>
                </div>
                <div class='poddiv5'>
                    <img src={list} class='png4_5'/>
                    <div class='text9'>Мои заказы</div>
                </div>
            </div>
        )
    }
}