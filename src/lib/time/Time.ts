import moment from 'moment'
import {MomentInput, Moment} from 'moment'

export function diff(params: TimeDifferenceArgs): TimeDifference {
    return new TimeDifference(params);
}

type TimeDifferenceArgs = {
    compareDt?: MomentInput, withDt: MomentInput
}

export class TimeDifference {
    diff: number;
    withDt: Moment;
    compareDt: Moment;
    constructor({compareDt, withDt} : TimeDifferenceArgs)
    {
        this.compareDt = moment(compareDt || moment.now());
        this.withDt = moment(withDt);
        this.diff = this.compareDt.diff(this.withDt);
    }

    display ({diff} : {diff : number}): string
    {
        const
            second = 1000, minute = second * 60, hour = minute * 60,
            day = hour * 24, month = day * 30, year = day * 365;

        let v;

        if (diff < minute)
        {
            v = Math.round(diff / second);
            return `${v} seconds ago`;
        }
        else if (diff < hour)
        {
            v = Math.round(diff / minute );
            return `${v} minutes ago`;
        }
        else if (diff < day)
        {
            v = Math.round(diff / hour );
            return `${v} hours ago`;
        }
        else if (diff < month)
        {
            v = Math.round(diff / day );
            return `${v} days ago`;
        }
        else if (diff < year)
        {
            v = Math.round(diff / month );
            return `${v} months ago`;
        }
        else
        {
            v = Math.round(this.diff / year );
            return `${v} years ago`;
        }
    }

    toString()
    {
        return this.display({diff: this.diff});
    }
}