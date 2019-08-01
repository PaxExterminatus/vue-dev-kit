import moment, {unitOfTime} from 'moment'
import {TimeExpression} from './TimeExpression'

type LastThisNext = 'last' | 'this' | 'next'

abstract class TimeExpressionInterval extends TimeExpression {
    interval(unit : unitOfTime.StartOf) : LastThisNext | undefined
    {
        if (moment().startOf(unit).subtract(1,'s').isSame(this.moment, unit)) {
            return 'last'
        }
        if (moment().startOf(unit).isSame(this.moment, unit)) {
            return 'this'
        }
        if (moment().endOf(unit).add(1,'s').isSame(this.moment, unit)) {
            return 'next'
        }
    }
}

export class ExpressionWithinDay extends TimeExpressionInterval {
    display() {
        const position = this.interval('day');
        if (position === 'last') return 'today';
        if (position === 'this') return 'yesterday';
        if (position === 'next') return 'tomorrow';
    }
}
export class ExpressionWithinWeek extends TimeExpressionInterval {
    display() {
        const position = this.interval('week');
        if (position === 'last') return 'last week';
        if (position === 'this') return 'this week';
        if (position === 'next') return 'next week';
    }
}
export class ExpressionWithinMonth extends TimeExpressionInterval {
    display() {
        const position = this.interval('month');
        if (position === 'last') return 'last month';
        if (position === 'this') return 'this month';
        if (position === 'next') return 'next month';
    }
}
export class ExpressionWithinYear extends TimeExpressionInterval {
    display() {
        const position = this.interval('year');
        if (position === 'last') return 'last year';
        if (position === 'this') return 'this year';
        if (position === 'next') return 'next year';
    }
}