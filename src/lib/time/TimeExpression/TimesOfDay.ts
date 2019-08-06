import {TimeExpression} from './TimeExpression'
import {ExpressionWithinDay} from './Interval'

export class IntervalDay extends TimeExpression
{
    get display()
    {
        const h = +this.moment.hour();
        if ( h < 12 )
            return 'morning';
        else if ( h < 18 )
            return 'afternoon';
        else
            return 'evening';
    }
}

export class IntervalDayLtn extends TimeExpression
{
    get display()
    {
        return `${new ExpressionWithinDay(this.moment).display} ${new IntervalDay(this.moment).display}`
    }
}