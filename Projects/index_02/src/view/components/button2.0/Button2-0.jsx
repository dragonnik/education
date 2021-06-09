import m from 'mithril'

import './_button2-0.scss'
export { ContainerFixed }

function ContainerFixed() {
    return {
        view: ({children}) => (
            <div class='button'>
                { children }
            </div>
        )
    }
}