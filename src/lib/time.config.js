import {RelativeTimeDisplayOpt} from 'time/RelativeTime/RelativeTimeDisplayOpt'

export default {
    format: {
        view: 'DD MMMM, YYYY',
        mysql: 'YYYY-MM-DD HH:mm:ss',
    },

    relativeTimeDisplayOpt: new RelativeTimeDisplayOpt({
        convert: t => t,
        display: t => t,
    }),
};