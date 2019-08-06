import moment, {Moment, MomentInput} from 'moment'
import {TimeExpressionInterface,ExpressionClasses} from '../TimeExpression/TimeExpression'

export class TimeDisplay
{
    moment : Moment;
    expressions : ExpressionClasses;
    expression : TimeExpressionInterface | undefined;
    constructor(inp: MomentInput, expressions: ExpressionClasses, public format : string = 'DD MMMM, YYYY [at] HH:mm')
    {
        this.moment = moment(inp);
        this.expressions = expressions;
        for (let Expression of this.expressions)
        {
            const exp : TimeExpressionInterface = new Expression(this.moment);
            if (exp.display) {
                this.expression = exp;
            }

        }
    }

    get display()
    {
        if (this.expression)
            return this.expression.display;
        else
            return this.moment.format(this.format);
    }

    toString()
    {
        return this.display;
    }
}