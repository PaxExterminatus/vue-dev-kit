import moment, {Moment, MomentInput} from 'moment'
import {TimeExpressionInterface,TimeExpressionClasses} from './TimeExpression/TimeExpression'
import {TimeDisplayEntity} from './TimeDisplayInterface'

export class TimeDisplay implements TimeDisplayEntity
{
    readonly moment : Moment;
    readonly expression : TimeExpressionInterface | undefined;
    readonly format : string;
    constructor(inp: MomentInput, expressions: TimeExpressionClasses, format: string = 'DD MMMM, YYYY [at] HH:mm')
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