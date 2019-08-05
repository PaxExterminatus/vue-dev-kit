import moment, {MomentInput, Moment} from 'moment'

export abstract class TimeExpression
{
    readonly second = 1000;
    readonly minute = this.second * 60;
    readonly hour   = this.minute * 60;
    readonly day    = this.hour   * 24;
    readonly month  = this.day    * 30;
    readonly year   = this.month  * 12;

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
}