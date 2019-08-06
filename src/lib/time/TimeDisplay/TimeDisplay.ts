import moment, {Moment, MomentInput} from 'moment'
import {ExpressionClasses} from '../TimeExpression/TimeExpression'

export class TimeDisplay
{
    moment : Moment;
    expressions : ExpressionClasses;
    constructor(inp: MomentInput,  expressions: ExpressionClasses)
    {
        this.moment = moment(inp);
        this.expressions = expressions;
    }

    get display()
    {
        for (let Expression of this.expressions)
        {
            const display = new Expression(this.moment).display;
            if (display) return display;
        }
    }

    toString()
    {
        return this.display || '';
    }
}