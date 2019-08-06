import {TimeExpression,TimeExpressionClass} from '../TimeExpression/TimeExpression'

export abstract class TimeExpressionFuture extends TimeExpression  {
    get diff()
    {
        return Math.abs(this.now.diff(this.moment));
    }
}

export class TimeDiffFutureSeconds extends TimeExpressionFuture
{
    get display()
    {
        if (this.diff < this.minute)
        {
            const v = Math.round(this.diff / this.second);
            return v > 1 ? `in ${v} seconds` : `in ${v} second`
        }
    }
}
export class TimeDiffFutureMinutes extends TimeExpressionFuture
{
    get display()
    {
        if (this.diff < this.hour)
        {
            const v = Math.round(this.diff / this.minute);
            return v > 1 ? `after ${v} minutes` : `after ${v} minute`
        }
    }
}
export class TimeDiffFutureHours extends TimeExpressionFuture
{
    get display()
    {
        if (this.diff < this.day) {
            const v = Math.round(this.diff / this.hour);
            return v > 1 ? `after ${v} hours` : `after ${v} hour`
        }
    }
}
export class TimeDiffFutureDays extends TimeExpressionFuture
{
    get display()
    {
        if (this.diff < this.month)
        {
            const v = Math.round(this.diff / this.day);
            return v > 1 ? `after ${v} days` : `after ${v} day`
        }
    }
}
export class TimeDiffFutureMonths extends TimeExpressionFuture {
    get display()
    {
        if (this.diff < this.year)
        {
            const v = Math.round(this.diff / this.month);
            return v > 1 ? `after ${v} months` : `after ${v} month`
        }
    }
}
export class TimeDiffFutureYears extends TimeExpressionFuture {
    get display()
    {
        if (this.diff >= this.year)
        {
            const v = Math.round(this.diff / this.year);
            return v > 1 ? `after ${v} years` : `after ${v} year`
        }
    }
}

export class DifferenceFuture extends TimeExpression
{
    get display() : string | undefined
    {
        if (this.diff < 0)
        {
            let display;
            const expressions : TimeExpressionClass[] = [
                TimeDiffFutureSeconds, TimeDiffFutureMinutes, TimeDiffFutureHours,
                TimeDiffFutureDays, TimeDiffFutureMonths, TimeDiffFutureYears
            ];

            for (let Expression of expressions)
            {
                display = new Expression(this.moment).display;
                if (display) return display;
            }
        }
    }
}