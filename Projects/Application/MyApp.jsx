import m from 'mithril'

import { NavBar } from './header/Header.jsx'
import { Project1 } from './Projects.jsx'
import { posts } from './Projects.jsx'
import './_appstyle.scss'

class Home {
    view() {
        return(
            <Menu/>
        )
    }
}

class Projects {
  static  view(vnode) {
        return (
            <div class='page1'>
                <Menu/>
                {/* <Project1>{ posts }</Project1> */}
                {vnode}
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
                        href: '/:1', 
                        class: 'nav', 
                        // key: m.route.param('1'),
                    }, 'PAGE 1')
                }
                {m(m.route.Link, {
                        href: '/home/:2',
                        class: 'nav',
                        // key: m.route.param('2')
                    }, 'PAGE 2')
                }
            </NavBar>
        )
    }
}

// m.route.set(m.route.get(), null, {state: {key: Date.now()}})

m.route(document.body, '/', {
    '/': Home,
    '/:1':{view: function (vnode) {return m(Projects,Project1)}},
})