import moment from 'moment'
import {TimeExpression, TimeExpressionClass} from './TimeExpression'
import {ExpressionWithinDay} from './Interval'
import {TimeDisplay} from "@/lib/time/TimeDisplay/TimeDisplay";

export class IntervalDay extends TimeExpression
{
    display()
    {
        const h = +this.moment.format('HH');
        if ( h < 12 )
            return 'morning';
        else if ( h < 18 )
            return 'afternoon';
        else
            return 'evening';
    }
}

export class IntervalDayLtn extends TimeExpression {
    display(): string | undefined
    {
        return `${new ExpressionWithinDay(this.moment).display()} ${new IntervalDay(this.moment).display()}`
    }
}