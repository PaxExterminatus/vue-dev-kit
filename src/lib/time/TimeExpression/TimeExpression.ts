import moment from 'moment'
import {MomentInput,Moment} from 'moment'

abstract class TimeExpression
{
    readonly second = 1000;
    readonly minute = this.second * 60;
    readonly hour   = this.minute * 60;
    readonly day    = this.hour * 24;
    readonly month  = this.day * 30;
    readonly year   = this.month * 12;
    moment: Moment;
    constructor(inp: MomentInput) {
        this.moment = moment(inp);
    }

    get diff() : number {
        return moment().diff(this.moment)
    }

    abstract condition() : boolean
    abstract view() : string
}
export class ToDayExpression extends TimeExpression
{
    condition() : boolean
    {
        return this.moment.isSame(moment(),'d');
    }
    view() : string
    {
        return 'today';
    }
}
export class YesterdayExpression extends TimeExpression
{
    condition() : boolean
    {
        return this.moment.isSame(moment().subtract(1,'d'),'d');
    }
    view() : string
    {
        return 'yesterday';
    }
}
export class TomorrowExpression extends TimeExpression
{
    condition() : boolean
    {
        return this.moment.isSame(moment().add(1,'d'),'d');
    }
    view() : string
    {
        return 'tomorrow';
    }
}

interface TimeExpressionClass {
    new (inp: MomentInput): TimeExpression;
}

const defaultTimeExpressionsList : TimeExpressionClass[] = [
    ToDayExpression, YesterdayExpression, TomorrowExpression,
];

declare type TimeDisplayArgs = {
    inp: MomentInput
    expressions?: TimeExpressionClass[]
}

export class TimeDisplay
{
    moment : Moment;
    expressions : TimeExpressionClass[];
    constructor({inp, expressions = defaultTimeExpressionsList} : TimeDisplayArgs)
    {
        this.moment = moment(inp);
        this.expressions = expressions;
    }

    get display()
    {
        for (let ExpressionClass of this.expressions)
        {
            const expression = new ExpressionClass(this.moment);
            if (expression.condition()) return expression.view();
        }
    }
}