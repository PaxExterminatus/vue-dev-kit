import {RelativeTimeDisplayOpt} from 'time/RelativeTime/RelativeTimeDisplayKit'

export default {
    format: {
        view: 'DD MMMM, YYYY',
        mysql: 'YYYY-MM-DD HH:mm:ss',
    },

    relativeTimeDisplayOpt: new RelativeTimeDisplayOpt({
        titleFormat: '[Created] DD MMMM, YYYY [at] HH:mm:ss',
        datetimeFormat: 'YYYY-MM-DDTHH:mm:ssZ',
    }),
};