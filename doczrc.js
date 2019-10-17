import { css } from 'docz-plugin-css'

export default {
    title: 'Styleguide',
    typescript: true,
    plugins: [
        css({
            preprocessor: 'postcss',
            cssmodules: false,
        }),
    ],
};
