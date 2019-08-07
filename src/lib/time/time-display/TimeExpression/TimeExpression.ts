import moment, {MomentInput, Moment} from 'moment'

export abstract class TimeExpression implements TimeExpressionInterface
{
    protected readonly second = 1000;
    protected readonly minute = this.second * 60;
    protected readonly hour   = this.minute * 60;
    protected readonly day    = this.hour   * 24;
    protected readonly month  = this.day    * 30;
    protected readonly year   = this.month  * 12;

    readonly now : Moment = moment();
    readonly moment : Moment;

    constructor(inp: MomentInput)
    {
        this.moment = moment(inp);
    }

    get diff() : number
    {
        return this.now.diff(this.moment)
    }

    abstract get display() : string | undefined;
}

export interface TimeExpressionInterface
{
    readonly moment : Moment
    readonly display: string | undefined
}

export interface TimeExpressionClass
{
    new (inp: MomentInput): TimeExpression;
}

export type TimeExpressionClasses = TimeExpressionClass[]