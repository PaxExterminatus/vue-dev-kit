
import {vMomentJs} from 'time/RelativeTime/RelativeTimeKit'
import {RelativeTimeDisplayOpt} from 'time/RelativeTime/RelativeTimeDisplayOpt'

export default {
    format: {
        view: 'DD MMMM, YYYY',
        mysql: 'YYYY-MM-DD HH:mm:ss',
    },

    relativeTimeDisplayOpt: new RelativeTimeDisplayOpt({
        convert: v => v,
        display: vMomentJs,
    }),
};