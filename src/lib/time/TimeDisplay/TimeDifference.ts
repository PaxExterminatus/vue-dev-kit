import moment, {MomentInput, Moment} from 'moment'

interface LimitsInterface
{
    readonly second: number
    readonly minute: number
    readonly hour: number
    readonly day: number
    readonly month: number
    readonly year: number
}

export type Tense = 'past' | 'future'
export type Unit = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'

export interface ExpressionInterface
{
    tense : Tense
    unit : Unit
    count: number
}

export class DifferenceExpression implements ExpressionInterface
{
    tense: Tense;
    unit: Unit;
    count: number;
    constructor({tense, unit, count} : ExpressionInterface)
    {
        this.tense = tense;
        this.unit = unit;
        this.count = count;
    }
}

export class TimeDifference implements LimitsInterface
{
    readonly second : number = 1000;
    readonly minute : number = this.second * 60;
    readonly hour   : number = this.minute * 60;
    readonly day    : number = this.hour * 24;
    readonly month  : number = this.day * 30;
    readonly year   : number = this.month * 12;

    readonly moment : Moment;
    private readonly diff: number;
    private readonly now : Moment = moment();
    constructor(inp: MomentInput, limits? : LimitsInterface)
    {
        this.moment = moment(inp);
        this.diff = this.now.diff(this.moment);
        if (limits) Object.assign(this,limits);
    }

    get expression() : DifferenceExpression
    {
        let tense : Tense, unit : Unit, number : Number, count : number;

        if (this.diff < 0) tense = "future";
        else tense = "past";

        if (this.diff < this.minute) unit = "second";
        else if (this.diff < this.hour) unit = "minute";
        else if (this.diff < this.day) unit = "hour";
        else if (this.diff < this.month) unit = "day";
        else if (this.diff < this.year) unit = "month";
        else unit = "year";

        count = Math.abs(Math.round(this.diff / this[unit]));

        return new DifferenceExpression({tense,unit,count});
    }

    get display() : string {
        let {tense, unit, count} = this.expression;

        if (tense === 'past')
        {
            if (unit === 'second')
            {
                return count > 1 ? `${count} seconds ago` : `${count} second ago`
            }
        } else { //future
            if (unit === 'second')
            {
                return count > 1 ? `in ${count} seconds` : `in ${count} second`
            }
        }

        return 'lol'
    }

    toString() {
        return this.display;
    }
}

export class DifferenceDisplay {

}
