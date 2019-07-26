import moment from 'moment'
import {TimeDisplay} from './TimeDisplay'
import {MomentInput,Moment} from 'moment'
import {TimeDifferenceDisplay,DisplayFuture,DisplayPast} from './TimeDifferenceDisplay'

export type TimeDifferenceArgs = {
    compareInp?: MomentInput
    withInp: MomentInput
}

export class TimeDifference implements TimeDisplay {
    diff: number;
    moment: Moment;
    constructor({withInp, compareInp = moment.now()} : TimeDifferenceArgs){
        this.moment = moment(withInp);
        this.diff = moment(compareInp).diff(moment(withInp));
    }

    get display()
    {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
        const year = month * 12;

        let diff = this.diff;
        let display : TimeDifferenceDisplay;

        if (diff > 0) {
            display = new DisplayPast();
        }
        else {
            diff = Math.abs(diff);
            display = new DisplayFuture();
        }

        if (diff < minute)
            return display.vSecond(Math.round(diff / second));
        if (diff < hour)
            return display.vMinute(Math.round(diff / minute));
        if (diff < day)
            return display.vHour(Math.round(diff / hour));
        if (diff < month)
            return display.vDay(Math.round(diff / day));
        if (diff < year)
            return display.vMonth(Math.round(diff / month));
        return display.vYear(Math.round(diff / year));
    }

    toString() {
        return this.display;
    }
}
