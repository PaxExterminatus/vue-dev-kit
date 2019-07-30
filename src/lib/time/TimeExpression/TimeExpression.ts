import moment from 'moment'
import {MomentInput,Moment} from 'moment'

abstract class TimeExpression
{
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

export class DayExpression extends TimeExpression {
    display(): string | undefined {
        if (this.moment.isSame(moment(),'d')) return 'today';
        if (this.moment.isSame(moment().subtract(1,'d'),'d')) return 'yesterday';
        if (this.moment.isSame(moment().add(1,'d'),'d')) return 'tomorrow';
    }
}
export class PastSecondsExpression extends TimeExpression {
    display() {
        if (this.diff < this.minute)
        {
            const v = Math.round(this.diff / this.second);
            return v > 1 ? `${v} seconds ago` : `${v} second ago`
        }
    }
}
export class PastMinutesExpression extends TimeExpression {
    display() {
        if (this.diff < this.hour) {
            const v = Math.round(this.diff / this.minute);
            return v > 1 ? `${v} minutes ago` : `${v} minute ago`
        }
    }
}
export class PastHoursExpression extends TimeExpression {
    display() {
        if (this.diff < this.day) {
            const v = Math.round(this.diff / this.hour);
            return v > 1 ? `${v} hours ago` : `${v} hour ago`;
        }
    }
}
export class PastDaysExpression extends TimeExpression {
    display() {
        if (this.diff < this.month) {
            const v = Math.round(this.diff / this.day);
            return v > 1 ? `${v} days ago` : `${v} day ago`;
        }
    }
}
export class PastMonthsExpression extends TimeExpression {
    display() {
        if (this.diff < this.year) {
            const v = Math.round(this.diff / this.month);
            return v > 1 ? `${v} months ago` : `${v} month ago`;
        }
    }
}
export class PastYearsExpression extends TimeExpression {
    display() {
        if (this.diff >= this.year) {
            const v = Math.round(this.diff / this.year);
            return v > 1 ? `${v} years ago`   : `${v} year ago`;
        }
    }
}


interface TimeExpressionClass {
    new (inp: MomentInput): TimeExpression;
}

const defaultTimeExpressionsList : TimeExpressionClass[] = [
    PastSecondsExpression,
    PastMinutesExpression,
    PastHoursExpression,
    PastDaysExpression,
    PastMonthsExpression,
    PastYearsExpression,
    DayExpression,
];

declare type TimeDisplayArgs = {
    inp: MomentInput
    expressions?: TimeExpressionClass[]
}

export class TimeDisplay
{
    moment : Moment;
    expressions : TimeExpressionClass[];
    constructor({inp, expressions = defaultTimeExpressionsList} : TimeDisplayArgs)
    {
        this.moment = moment(inp);
        this.expressions = expressions;
    }

    get display()
    {
        for (let ExpressionClass of this.expressions)
        {
            const display = new ExpressionClass(this.moment).display();
            if (display) return display;
        }
    }
}