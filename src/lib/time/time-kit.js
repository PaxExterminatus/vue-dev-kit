import moment from 'moment'
import {timeConfig} from 'lb/time.config'

export function utcToLocal(date, format = timeConfig.format.view)
{
    return moment.utc(date).local().format(format);
}

export function timeAgoViewMomentJs(date) {
    return moment(date).fromNow();
}

export function timeAgoViewMomentJsCustom() {
    moment.relativeTimeThreshold('ss',10);
}