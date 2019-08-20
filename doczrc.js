import { css } from 'docz-plugin-css'

export default {
    title: 'Styleguide',
    plugins: [
        css({
            preprocessor: 'postcss',
            cssmodules: false,
        }),
    ],
}
