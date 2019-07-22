import moment from 'moment'
import {MomentInput} from 'moment'

export function diff(params: TimeDifferenceArgs): TimeDifference {
    return new TimeDifference(params);
}

type TimeDifferenceArgs = {
    withInp: MomentInput
    compareInp?: MomentInput,
}

export class TimeDifference {
    second: number = 1000;
    minute: number = this.second * 60;
    hour:   number = this.minute * 60;
    day:    number = this.hour   * 24;
    month:  number = this.day    * 30;
    year:   number = this.month  * 12;

    diff: number;
    constructor({withInp, compareInp = moment.now()} : TimeDifferenceArgs)
    {
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

    toString()
    {
        return this.display;
    }
}