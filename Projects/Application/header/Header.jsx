import m from 'mithril'

import './_header.scss'
import navbar from '../images/hamburger.png'

export class Header{
    // headerDom: HTMLElement;
    
    view() {
        return(
            <div oncreate={({dom})=> {this.headerDom = dom} }>
                <div class='header'>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}