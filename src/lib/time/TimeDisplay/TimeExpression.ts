import moment, {MomentInput, Moment} from 'moment'

export abstract class TimeExpression {
    readonly second = 1000;
    readonly minute = this.second * 60;
    readonly hour   = this.minute * 60;
    readonly day    = this.hour * 24;
    readonly month  = this.day * 30;
    readonly year   = this.month * 12;
    moment: Moment;
    constructor(inp: MomentInput) {
        this.moment = moment(inp);
    }

    get diff() : number {
        return moment().diff(this.moment)
    }
    abstract display() : string | undefined
}

export class ExpressionFutureDiff extends TimeExpression
{
    display(): string | undefined
    {
        let v : number, diff = this.diff;
        if (diff < 0)
        {
            diff = Math.abs(diff);
            if (diff < this.minute)
            {
                v = Math.round(diff / this.second);
                return v > 1 ? `in ${v} seconds` : `in ${v} second`
            }
            if (diff < this.hour)
            {
                v = Math.round(diff / this.minute);
                return v > 1 ? `after ${v} minutes` : `after ${v} minute`
            }
            if (diff < this.day)
            {
                v = Math.round(diff / this.hour);
                return v > 1 ? `after ${v} hours` : `after ${v} hour`
            }
            if (diff < this.month)
            {
                v = Math.round(diff / this.day);
                return v > 1 ? `after ${v} days` : `after ${v} day`
            }
            if (diff < this.year)
            {
                v = Math.round(diff / this.month);
                return v > 1 ? `after ${v} months` : `after ${v} month`
            }
            v = Math.round(diff / this.year);
            return v > 1 ? `after ${v} years` : `after ${v} year`
        }
    }
}

