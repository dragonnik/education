import m from 'mithril';

import './_button.scss'
export { Button }

function Button() {
    return {
        view: () => (
            <div class='maindiv4'>
                <div class='but'>
                    <div class='text8'>Продолжить</div>
                    <div class='podtext8'>1 товар, 169 990тг</div>
                </div>
            </div>
        )
    }
}
m.mount(document.body, Button)