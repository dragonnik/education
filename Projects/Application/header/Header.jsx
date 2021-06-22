import m from 'mithril'

import './_header.scss'
import { Project1 } from '../pages/page_1/project_01.jsx'
import { Page1 } from '../MyApp.jsx'

export class NavBar{
    view(vnode) {
        return(
            <div>
                <div class='bg'></div>
                <div class='layout'>
                    <div class='navbar'>
                        <nav class='navigation'>
                            { vnode.children }
                        </nav>
                    </div>
                </div>
                
            </div>
        )
    }
}