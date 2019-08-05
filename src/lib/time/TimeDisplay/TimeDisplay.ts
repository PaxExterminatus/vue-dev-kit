import moment, {Moment, MomentInput} from 'moment'

export interface TimeDisplayInterface
{
    readonly display : string | undefined
}

export interface TimeExpressionClass
{
    new (inp: MomentInput): TimeDisplayInterface;
}

export class TimeDisplay
{
    moment : Moment;
    expressions : TimeExpressionClass[];
    constructor({inp, expressions} : {inp: MomentInput,  expressions: TimeExpressionClass[]})
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