import {utcToLocal, timeAgoView} from './time/time-kit'

export const timeConfig = {
    format: {
        input: 'YYYY-MM-DD HH:mm:ss',
        view: 'YYYY-MM-DD HH:mm:ss',
    },
    convert: {
        input: utcToLocal,
    },
    timeAgo: {
        view: timeAgoView,
        format: 'DD MMMM, YYYY',
    },
};