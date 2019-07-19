import moment from 'moment'
import {MomentInput, Moment} from 'moment'

export function diff(params: TimeDifferenceArgs): TimeDifference {
    return new TimeDifference(params);
}

type TimeDifferenceArgs = {
    compareDt?: MomentInput, withDt: MomentInput
}

export class TimeDifference {
    compareDt: Moment;
    withDt: Moment;
    diff: number;
    constructor({compareDt, withDt} : TimeDifferenceArgs)
    {
        this.compareDt = moment(compareDt || moment.now());
        this.withDt = moment(withDt);
        this.diff = this.compareDt.diff(this.withDt);
    }

    get display (): string
    {
        const perMinute = 60 * 1000;
        const perHour = perMinute * 60;
        const perDay = perHour * 24;
        const perMonth = perDay * 30;
        const perYear = perDay * 365;

        return `${this.diff}`;
    }

    toString()
    {
        return this.display;
    }
}