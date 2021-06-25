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

// class Projects {
//   static  view({attrs}) {
//         return (
//             <div class='page1'>
//                 <Menu/>
//                 <Project1>{ posts }</Project1>
//                 {/* {vnode} */}
//             </div>
//         )
//     }
// }


// class exComp {
//     view (content){
//         return m('div', [
//             m(Menu),
//             m('div', {content})     
//         ])
//     }
// }

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
                        href: '/Project1', 
                        class: 'nav', 
                        // key: m.route.param('1'),
                    }, 'PAGE 1')
                }
                {m(m.route.Link, {
                        href: '/Project2',
                        class: 'nav',
                        // key: m.route.param('2')
                    }, 'PAGE 2')
                }
            </NavBar>
        )
    }
}


let f = (VieComponent) => {
    return {
        // onmatch: function(args, requestedPath, route) {
        //     return Home
        // },
        view : function(vnode) {
            return <div class='page1'>
                <Menu/>                
                <VieComponent>
                </VieComponent>
            </div>
        },
    }
}

// m.route.set(m.route.get(), null, {state: {key: Date.now()}})

m.route(document.body, '/', {
    '/': Home,
    '/Project1': f(Project1),//{view: function () {return m(Projects)}},
    '/Project2': f(Project1)//{view: function () {return m(Projects)}}
})