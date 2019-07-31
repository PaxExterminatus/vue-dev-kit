import moment from 'moment'
import {MomentInput,Moment,unitOfTime} from 'moment'
import {TimeDisplay,TimeExpressionClass} from './TimeDisplay'

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

abstract class ExpressionStartOf extends TimeExpression {
    startOfUnit(unit : unitOfTime.StartOf)
    {
        if (moment().startOf(unit).subtract(1,'d').isSame(this.moment, unit)) {
            return 'last'
        }
        if (moment().startOf(unit).isSame(this.moment, unit)) {
            return 'this'
        }
        if (moment().endOf(unit).add(1,'d').isSame(this.moment, unit)) {
            return 'next'
        }
    }
}

export class ExpressionWeek extends ExpressionStartOf {
    display(): string | undefined {
        const limit = this.startOfUnit('week');
        if (limit === 'last') return 'last week';
        if (limit === 'this') return 'this week';
        if (limit === 'next') return 'next week';
    }
}
export class ExpressionMonth extends ExpressionStartOf {
    display(): string | undefined {
        const limit = this.startOfUnit('month');
        if (limit === 'last') return 'last month';
        if (limit === 'this') return 'this month';
        if (limit === 'next') return 'next month';
    }
}
export class ExpressionDay extends TimeExpression {
    display(): string | undefined {
        if (this.moment.isSame(moment(),'d')) return 'today';
        if (this.moment.isSame(moment().subtract(1,'d'),'d')) return 'yesterday';
        if (this.moment.isSame(moment().add(1,'d'),'d')) return 'tomorrow';
    }
}
export class ExpressionPastSeconds extends TimeExpression {
    display() {
        if (this.diff < this.minute)
        {
            const v = Math.round(this.diff / this.second);
            return v > 1 ? `${v} seconds ago` : `${v} second ago`
        }
    }
}
export class ExpressionPastMinutes extends TimeExpression {
    display() {
        if (this.diff < this.hour) {
            const v = Math.round(this.diff / this.minute);
            return v > 1 ? `${v} minutes ago` : `${v} minute ago`
        }
    }
}
export class ExpressionPastHours extends TimeExpression {
    display() {
        if (this.diff < this.day) {
            const v = Math.round(this.diff / this.hour);
            return v > 1 ? `${v} hours ago` : `${v} hour ago`;
        }
    }
}
export class ExpressionPastDays extends TimeExpression {
    display() {
        if (this.diff < this.month) {
            const v = Math.round(this.diff / this.day);
            return v > 1 ? `${v} days ago` : `${v} day ago`;
        }
    }
}
export class ExpressionPastMonths extends TimeExpression {
    display() {
        if (this.diff < this.year) {
            const v = Math.round(this.diff / this.month);
            return v > 1 ? `${v} months ago` : `${v} month ago`;
        }
    }
}
export class ExpressionPastYears extends TimeExpression {
    display() {
        if (this.diff >= this.year) {
            const v = Math.round(this.diff / this.year);
            return v > 1 ? `${v} years ago`   : `${v} year ago`;
        }
    }
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

export class ExpressionPastDiff extends TimeExpression
{
    display(): string | undefined
    {
        const expressions : TimeExpressionClass[] = [
            ExpressionPastSeconds,
            ExpressionPastMinutes,
            ExpressionPastHours,
            ExpressionPastDays,
            ExpressionPastMonths,
            ExpressionPastYears,
        ];
        return new TimeDisplay({inp: this.moment, expressions}).display;
    }
}