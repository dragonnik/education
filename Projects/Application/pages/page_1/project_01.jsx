import m from 'mithril'

import './_project1.scss'

export class Project1 {
    view(vnode) {
        return(
            <div class='frame1' id={ vnode.attrs.id }>
                <iframe src='./index_01/' height='667' width='375px'>
                </iframe>
            </div>
        )
    }
}