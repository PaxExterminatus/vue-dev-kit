import {TimeExpression} from './TimeExpression'
import {ExpressionWithinDay} from './Interval'
import {TimeDisplayInterface} from './TimeDisplay'

export class IntervalDay extends TimeExpression implements TimeDisplayInterface
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

export class IntervalDayLtn extends TimeExpression implements TimeDisplayInterface
{
    get display()
    {
        return `${new ExpressionWithinDay(this.moment).display} ${new IntervalDay(this.moment).display}`
    }
}