import moment from 'moment';
import {Moment, MomentInput} from 'moment';
import {TimeExpression} from './TimeExpression.js';

export interface TimeExpressionClass {
    new (inp: MomentInput): TimeExpression;
}

export declare type TimeDisplayArgs = {
    inp: MomentInput
    expressions: TimeExpressionClass[]
}

export class TimeDisplay
{
    moment : Moment;
    expressions : TimeExpressionClass[];
    constructor({inp, expressions} : TimeDisplayArgs)
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