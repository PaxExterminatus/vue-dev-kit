import conf from 'lb/time.config'
import moment from 'moment'

export function toLocate({utc, format = conf.displayFormat})
{
    return moment.utc(utc).local().format(format);
}