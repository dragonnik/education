import m from 'mithril'

import './_header.scss'
import { Project1 } from '../pages/page_1/project_01.jsx'

export class NavBar{
    constructor(attrs){
        this.menuOpen = false
        this.menuClosed = false
    }
    view(attrs) {
        let classmenuanimatable = ' menu--animatable';
        let classNameForMenu = 'menu'; 
        if (this.menuOpen) {
            classNameForMenu += classmenuanimatable;
            classNameForMenu += ' menu--visible';
        } 
        return(
            <div>
                <div class='layout'>
                    <div class='navbar'>
                        <div class='dev1'><a href='/'>HOME</a></div>
                        <div class='dev1'><a href='/page1'>PAGE 1</a></div>
                    </div>
                    <div class='frame1'>
                    </div>
                </div>
            </div>
        )
    }
}