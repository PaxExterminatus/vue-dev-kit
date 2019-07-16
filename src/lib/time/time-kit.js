import moment from 'moment'
import {timeConfig} from 'lb/time.config'

export function utcToLocal(date, format = timeConfig.format.view)
{
    return moment.utc(date).local().format(format);
}

export function timeAgoView(date)
{
    const now = moment.now();
    const diff = moment(now).diff(date,'s');

    return moment(date).fromNow();

    // console.log('diff', diff);
    // if (diff <= 10) {
    //     console.log(1);
    //     return 'Now';
    // } else if (diff > 10 && diff <= 12 * 3600) {
    //     console.log(2);
    //     return moment(now).fromNow();
    // } else {
    //     console.log(3);
    //     return moment(now).format(timeConfig.timeAgo.format)
    // }
}