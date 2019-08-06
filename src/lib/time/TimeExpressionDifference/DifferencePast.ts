import {TimeExpression,TimeExpressionClass} from '../TimeExpression/TimeExpression'

export class TimeDiffPastSeconds extends TimeExpression
{
    get display()
    {
        if (this.diff < this.minute)
        {
            const v = Math.round(this.diff / this.second);
            return v > 1 ? `${v} seconds ago` : `${v} second ago`
        }
    }
}
export class TimeDiffPastMinutes extends TimeExpression
{
    get display()
    {
        if (this.diff < this.hour)
        {
            const v = Math.round(this.diff / this.minute);
            return v > 1 ? `${v} minutes ago` : `${v} minute ago`
        }
    }
}
export class TimeDiffPastHours extends TimeExpression
{
    get display()
    {
        if (this.diff < this.day)
        {
            const v = Math.round(this.diff / this.hour);
            return v > 1 ? `${v} hours ago` : `${v} hour ago`
        }
    }
}
export class TimeDiffPastDays extends TimeExpression
{
    get display()
    {
        if (this.diff < this.month)
        {
            const v = Math.round(this.diff / this.day);
            return v > 1 ? `${v} days ago` : `${v} day ago`
        }
    }
}
export class TimeDiffPastMonths extends TimeExpression
{
    get display()
    {
        if (this.diff < this.year)
        {
            const v = Math.round(this.diff / this.month);
            return v > 1 ? `${v} months ago` : `${v} month ago`
        }
    }
}
export class TimeDiffPastYears extends TimeExpression
{
    get display()
    {
        if (this.diff >= this.year)
        {
            const v = Math.round(this.diff / this.year);
            return v > 1 ? `${v} years ago` : `${v} year ago`
        }
    }
}

export class DifferencePast extends TimeExpression
{
    get display() : string | undefined
    {
        if (this.diff > 0)
        {
            let display;
            const expressions : TimeExpressionClass[] = [
                TimeDiffPastSeconds, TimeDiffPastMinutes, TimeDiffPastHours,
                TimeDiffPastDays, TimeDiffPastMonths, TimeDiffPastYears
            ];

            for (let Expression of expressions)
            {
                display = new Expression(this.moment).display;
                if (display) return display;
            }
        }
    }
}