import m from 'mithril'

import './_header.scss'
import navbar from '../images/hamburger.png'

export class NavBar{
    constructor(){
        this.menuOpen = false
        this.menuClosed = false
    }
    view() {
        let classmenuanimatable = ' menu--animatable';
        let classNameForMenu = 'menu'; 
        if (this.menuOpen) {
            classNameForMenu += classmenuanimatable;
            classNameForMenu += ' menu--visible';
        } 
        return(
            <div>
                <div class={ classNameForMenu }>
                    <div class='app-menu'>
                        
                    </div>
                </div>
                <div class='layout'>
                    <div class='header'>
                        <div class='menu-icon' onclick = { () => {
                            this.menuOpen = !this.menuOpen
                            console.log(this.menuOpen)
                        } }></div>
                    </div>
                </div>
            </div>
        )
    }
}