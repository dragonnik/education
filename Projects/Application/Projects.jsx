import m from 'mithril'

import './pages/page_1/_project1.scss'

export class Project1 {
    view({attrs}) {
        return(
            <ul>
                {posts.map((post) => (
                    <li id={post.id}>
                        <div class='frame1'>
                            <iframe src={post.src} height='667px' width='375px'>                                    
                            </iframe>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

const posts = [
    {
        id: '1',
        src: './index_01/'
    },
    {
        id: '2',
        src: '../../index_02/dist/'
    }
]