import moment, {Moment, MomentInput} from 'moment'
import {TimeExpressionInterface,ExpressionClasses} from '../../TimeExpression/TimeExpression'
import {TimeDisplayInterface} from '../prototypes/TimeDisplayTypes'

export class TimeDisplay implements  TimeDisplayInterface
{
    readonly moment : Moment;
    readonly expression : TimeExpressionInterface | undefined;
    readonly format : string;
    constructor(inp: MomentInput, expressions: ExpressionClasses, format : string = 'DD MMMM, YYYY [at] HH:mm')
    {
        this.moment = moment(inp);
        for (let Expression of expressions)
        {
            const exp : TimeExpressionInterface = new Expression(this.moment);
            if (exp.display)
            {
                this.expression = exp;
                break;
            }
        }
        this.format = format;
    }

    get title() {
        return this.moment.format(this.format);
    }

    get datetime() {
        return this.moment.format();
    }

    get display() {
        if (this.expression && this.expression.display)
            return this.expression.display;
        else
            return this.title;
    }

    toString() {
        return this.display;
    }
}