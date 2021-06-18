import m from 'mithril'

import { NavBar } from './header/Header.jsx'
import { Project1 } from './pages/page_1/project_01.jsx'
export { Menu }

var Home = {
    view: function() {
        return [
            m(Menu),
            m(NavBar)
        ]
    }
}
var Page1 = {
    view: function() {
        return [
            m(Menu),
            m(Project1)
        ]
    }
}
var Menu = {
    view: function(attrs) {
        attrs.name = this.page1
        return m(NavBar, [
            m(m.route.Link, {href: "/"}),
            m(m.route.Link, {href: '/page1'}, this.page1)
        ])
    }
}
m.route(document.body, '/home', {
    '/home': Home,
    '/page1': Page1,
})