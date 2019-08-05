import moment, {Moment, MomentInput} from 'moment'
import {ExpressionConstructor} from '../TimeExpression/TimeExpression'

export interface TimeDisplayInterface
{
    readonly display : string | undefined
}

export class TimeDisplay
{
    moment : Moment;
    expressions : ExpressionConstructor[];
    constructor({inp, expressions} : {inp: MomentInput,  expressions: ExpressionConstructor[]})
    {
        this.moment = moment(inp);
        this.expressions = expressions;
    }

    get display()
    {
        for (let ExpressionClass of this.expressions)
        {
            const display = new ExpressionClass(this.moment).display;
            if (display) return display;
        }
    }

    toString()
    {
        return this.display;
    }
}