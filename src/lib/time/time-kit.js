import moment from 'moment'
import {timeConfig} from 'lb/time.config'

export function utcToLocal(utcDt, format = timeConfig.format.view)
{
    return moment.utc(utcDt).local().format(format);
}