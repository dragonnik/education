import m from 'mithril'

import '../page_1/_project1.scss'

export class Project2 {
    view(vnode) {
        return(
            <div class='frame1' id={ vnode.attrs.id }>
                <iframe src='../../../index_02/dist/' height='667' width='375px'>
                </iframe>
            </div>
        )
    }
}