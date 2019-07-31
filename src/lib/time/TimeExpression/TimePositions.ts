import moment, {unitOfTime} from "moment"
import {TimeExpression} from "./TimeExpression"

type Positions = 'last' | 'this' | 'next'
type PositionsExpression = 'last week' | 'this week' | 'next week' | 'last month' | 'this month' | 'next month' | 'today' | 'yesterday' | 'tomorrow'

abstract class TimePosition extends TimeExpression {
    startOfUnit(unit : unitOfTime.StartOf) : Positions | undefined
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

export class ExpressionDay extends TimePosition {
    display() {
        const position = this.startOfUnit('day');
        if (position === 'last') return 'today';
        if (position === 'this') return 'yesterday';
        if (position === 'next') return 'tomorrow';
    }
}
export class ExpressionWeek extends TimePosition {
    display() {
        const position = this.startOfUnit('week');
        if (position === 'last') return 'last week';
        if (position === 'this') return 'this week';
        if (position === 'next') return 'next week';
    }
}
export class ExpressionMonth extends TimePosition {
    display() {
        const position = this.startOfUnit('month');
        if (position === 'last') return 'last month';
        if (position === 'this') return 'this month';
        if (position === 'next') return 'next month';
    }
}
