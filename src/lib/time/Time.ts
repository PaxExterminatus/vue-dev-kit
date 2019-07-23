import moment, {Moment} from 'moment'
import {MomentInput} from 'moment'

export function diff(params: TimeDifferenceArgs): TimeDifference {
    return new TimeDifference(params)
}
export function  exp(params: TimeExpressionArgs): TimeExpression {
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

    get lessMinute(){
        return this.diff < this.minute;
    }
    get lessHour(){
        return this.diff < this.hour;
    }
    get lessDay(){
        return this.diff < this.day;
    }
    get lessMonth(){
        return this.diff < this.month;
    }
    get lessYear(){
        return this.diff < this.year;
    }

    get vSecond(){
        let v = Math.round(this.diff / this.second);
        return  v > 1 ? `${v} seconds ago` : `${v} second ago`;
    }
    get vMinute(){
        let v = Math.round(this.diff / this.minute);
        return  v > 1 ? `${v} minutes ago` : `${v} minute ago`;
    }
    get vHour(){
        let v = Math.round(this.diff / this.hour);
        return  v > 1 ? `${v} hours ago` : `${v} hour ago`;
    }
    get vDay(){
        let v = Math.round(this.diff / this.day);
        return  v > 1 ? `${v} days ago` : `${v} day ago`;
    }
    get vMonth(){
        let v = Math.round(this.diff / this.month);
        return  v > 1 ? `${v} months ago` : `${v} month ago`;
    }
    get vYear(){
        let v = Math.round(this.diff / this.year);
        return  v > 1 ? `${v} years ago` : `${v} year ago`;
    }

    get display()
    {
        if (this.lessMinute)
            return this.vSecond;
        if (this.lessHour)
            return this.vMinute;
        if (this.lessDay)
            return this.vHour;
        if (this.lessMonth)
            return this.vDay;
        if (this.lessYear)
            return this.vMonth;
        return this.vYear;
    }

    toString() {
        return this.display;
    }
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

    get display(){
        if (this.yesterday) return this.vYesterday;
        if (this.today) return this.vToday;
        if (this.tomorrow) return this.vTomorrow;
        return new TimeDifference({withInp: this.moment}).display;
    }

    toString(){
        return this.display;
    }
}