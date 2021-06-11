import m from 'mithril'

import {Header} from './header/Header.jsx'

export class Application{
    view() {
        return(
            <div>
                <Header/>
            </div>
        )
    }
}
m.mount(document.body, Application)