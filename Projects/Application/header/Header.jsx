import m from 'mithril'

import './_header.scss'
import { Project1 } from '../pages/page_1/project_01.jsx'
import { Page1 } from '../MyApp.jsx'

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
                        <nav>
                            <a class='dev1' href='/'>HOME</a>
                            <br/>
                            <a class='dev1' href={ Page1 }>PAGE 1</a>
                        </nav>
                    </div>
                    <div class='frame1'>
                    </div>
                </div>
            </div>
        )
    }
}