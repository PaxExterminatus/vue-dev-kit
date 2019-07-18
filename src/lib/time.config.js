import {toLocate} from 'time/TimeConvert/TimeConvertKit'
import {vMomentJs} from 'time/RelativeTime/RelativeTimeKit'
import {RelativeTimeDisplayOpt} from 'time/RelativeTime/RelativeTimeDisplayOpt'

export default {
    displayFormat: 'DD MMMM, YYYY',
    // format: {
    //     input: 'YYYY-MM-DD HH:mm:ss',
    //     view: 'YYYY-MM-DD HH:mm:ss',
    // },
    // convert: {
    //     input: utcToLocal,
    // },
    // timeAgo: {
    //     view: timeAgoViewMomentJs,
    //     format: 'DD MMMM, YYYY',
    // },

    relativeTimeDisplayOpt: new RelativeTimeDisplayOpt({
        convert: toLocate,
        display: vMomentJs,
    }),
};