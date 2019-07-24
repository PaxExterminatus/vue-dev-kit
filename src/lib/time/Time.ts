import moment, {Moment} from 'moment'
import {MomentInput} from 'moment'

export function diff(params: TimeDifferenceArgs): TimeDifference {
    return new TimeDifference(params)
}
export function exp(params: TimeExpressionArgs): TimeExpression {
    return new TimeExpression(params)
}

type TimeDifferenceArgs = {
    compareInp?: MomentInput
    withInp: MomentInput
}

export interface TimeDisplay {
    moment: Moment,
    readonly display: string
    toString(): string
}

export class TimeDifference implements TimeDisplay {
    second: number = 1000;
    minute: number = this.second * 60;
    hour:   number = this.minute * 60;
    day:    number = this.hour   * 24;
    month:  number = this.day    * 30;
    year:   number = this.month  * 12;
    diff: number;
    moment: Moment;
    constructor({withInp, compareInp = moment.now()} : TimeDifferenceArgs){
        this.moment = moment(withInp);
        this.diff = moment(compareInp).diff(moment(withInp));
    }

    get display()
    {
        let diff = this.diff;
        let display : TimeDifferenceDisplay;

        if (diff > 0) {
            display = new DisplayPast();
        }
        else {
            diff = Math.abs(diff);
            display = new DisplayFuture();
        }

        if (diff < this.minute)
            return display.vSecond(Math.round(diff / this.second));
        if (diff < this.hour)
            return display.vMinute(Math.round(diff / this.minute));
        if (diff < this.day)
            return display.vHour(Math.round(diff / this.hour));
        if (diff < this.month)
            return display.vDay(Math.round(diff / this.day));
        if (diff < this.year)
            return display.vMonth(Math.round(diff / this.month));
        return display.vYear(Math.round(diff / this.year));
    }

    toString() {
        return this.display;
    }
}

export interface TimeDifferenceDisplay {
    vSecond(v:number):string
    vMinute(v:number):string
    vHour(v:number):string
    vDay(v:number):string
    vMonth(v:number):string
    vYear(v:number):string
}

export class DisplayPast implements TimeDifferenceDisplay {
    vSecond = (v:number) => v > 1 ? `${v} seconds ago` : `${v} second ago`;
    vMinute = (v:number) => v > 1 ? `${v} minutes ago` : `${v} minute ago`;
    vHour   = (v:number) => v > 1 ? `${v} hours ago`   : `${v} hour ago`;
    vDay    = (v:number) => v > 1 ? `${v} days ago`    : `${v} day ago`;
    vMonth  = (v:number) => v > 1 ? `${v} months ago`  : `${v} month ago`;
    vYear   = (v:number) => v > 1 ? `${v} years ago`   : `${v} year ago`;
}

export class DisplayFuture implements TimeDifferenceDisplay {
    vSecond = (v:number) => v > 1 ? `in ${v} seconds`    : `in ${v} second`;
    vMinute = (v:number) => v > 1 ? `after ${v} minutes` : `after ${v} minute`;
    vHour   = (v:number) => v > 1 ? `after ${v} hours`   : `after ${v} hour`;
    vDay    = (v:number) => v > 1 ? `after ${v} days`    : `after ${v} day`;
    vMonth  = (v:number) => v > 1 ? `after ${v} months`  : `after ${v} month`;
    vYear   = (v:number) => v > 1 ? `after ${v} years`   : `after ${v} year`;
}

export type TimeExpressionArgs = {
    inp: MomentInput,
}

export class TimeExpression implements TimeDisplay {
    moment: Moment;
    constructor({inp} : TimeExpressionArgs){
        this.moment = moment(inp);
    }

    get yesterday(){
        return this.moment.isSame(moment().subtract(1,'d'),'d');
    }
    get today(){
        return this.moment.isSame(moment(),'d');
    }
    get tomorrow(){
        return this.moment.isSame(moment().add(1,'d'),'d');
    }

    get vYesterday(){
        return 'yesterday'
    }
    get vToday(){
        return 'today'
    }
    get vTomorrow(){
        return 'tomorrow'
    }

    get display()
    {
        if (this.yesterday) return this.vYesterday;
        if (this.today) return this.vToday;
        if (this.tomorrow) return this.vTomorrow;
        return new TimeDifference({withInp: this.moment}).display;
    }

    toString(){
        return this.display;
    }
}