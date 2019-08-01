import moment, {Moment, MomentInput} from 'moment';
import {TimeExpressionClass} from './TimeExpression.js';

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