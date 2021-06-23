import m from 'mithril'

import { NavBar } from './header/Header.jsx'
import { Project1 } from './Projects.jsx'
import './_appstyle.scss'

class Home {
    view() {
        return(
            <Menu/>
        )
    }
}

class Page1 {
    view() {
        return (
            <div class='page1'>
                <Menu/>
                <Project1/>
            </div>
        )
    }
}

export class Menu {
    view() {
        return (
            <NavBar>
                {m(m.route.Link, {
                        href: '/',
                        class: 'nav'
                    }, 'HOME')                  
                }
                {m(m.route.Link, {
                        id: '1',
                        href: '/home/:1', 
                        class: 'nav', 
                        key: m.route.param('1')
                    }, 'PAGE 1')
                }
                {m(m.route.Link, {
                        id: '2',
                        href: '/home/:2',
                        class: 'nav',
                        key: m.route.param('2')
                    }, 'PAGE 2')
                }
            </NavBar>
        )
    }
}

m.route.set(m.route.get(), null, {state: {key: Date.now()}})

m.route(document.body, '/home', {
    '/home': Home,
    '/home/:key': Page1,
    '/home/:key': Page1,
})