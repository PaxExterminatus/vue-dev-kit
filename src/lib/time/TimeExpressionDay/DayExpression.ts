import {TimeExpression} from '../TimeExpression/TimeExpression'
import {ExpressionWithinDay} from '../TimeExpressionInterval/Interval'

export type TimesOfTheDay = 'midnight' | 'noon' | 'night' | 'morning' | 'afternoon' | 'evening'

export class IntervalDay extends TimeExpression
{
    get display() : TimesOfTheDay
    {
        const h : number = <number>this.moment.hour();
        if (h === 0) return 'midnight';
        else if (h === 12) return 'noon';
        else if (h >= 22) return 'night';
        else if (h < 6) return 'night';
        else if (h >= 6 && h < 12) return 'morning';
        else if (h > 12 && h <= 17) return 'afternoon';
        else return 'evening';
    }
}

export class IntervalDayLtn extends TimeExpression
{
    get display()
    {
        return `${new ExpressionWithinDay(this.moment).display} ${new IntervalDay(this.moment).display}`
    }
}