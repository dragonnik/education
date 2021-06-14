import m from 'mithril'

import { NavBar } from './header/Header.jsx'

export class Application{
    view() {
        return(
            <div>
                <NavBar/>
            </div>
        )
    }
}
m.mount(document.body, Application)