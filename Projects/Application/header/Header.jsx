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
                <div class='layout'>
                    <iframe src='./index_01/' class='project1' height='667' width='375'>
                    </iframe>
                    <iframe src='./index_02/dist/index.html' width='375' height='667' class='project2'>                        
                    </iframe>
                </div>
            </div>
        )
    }
}