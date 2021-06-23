import m from 'mithril'

import './_project1.scss'

export class Project1 {
    view({attrs}) {
        return(
            <div class='frame1' id={ attrs.id }>
                <iframe src='./index_01/' height='667' width='375px'>
                </iframe>
            </div>
        )
    }
}