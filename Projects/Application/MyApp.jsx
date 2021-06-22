import m from 'mithril'

import { NavBar } from './header/Header.jsx'
import { Project1 } from './pages/page_1/project_01.jsx'
import { Project2 } from './pages/page_2/project_02.jsx'
import './_appstyle.scss'
export { Menu }

var Home = {
    view: function() {
        return [
            m(Menu),
        ]
    }
}   

var Page1 = {
    view: function(vnode) {
        return [
            m(Menu),
            m(Project1)//, { id: '1' }),
            // m(Project2, { id: '2' })
        ]
    }
}

var Menu = {
    view: function() {
        return m(NavBar,[
            m(m.route.Link, {
                href: "/",
                class: 'nav',
            }, 'HOME'),
            m(m.route.Link, {
                id: '1',
                href: '/home/:1',
                class: 'nav',
                key: m.route.param("1")
            }, 'PAGE 1'),
            m(m.route.Link, {
                id: '2',
                href: '/home/:2',
                class: 'nav',
                key: m.route.param("2")
            }, 'PAGE 2')
        ])
    }
}

m.route(document.body, '/home', {
    '/home': Home,
    '/home/:key': Page1,
    '/home/:key': Page1,
})