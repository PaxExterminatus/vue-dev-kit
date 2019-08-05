import moment from 'moment'
import {TimeExpression,TimeExpressionConstructor} from './TimeExpression'
import {TimeDisplay,TimeDisplayInterface} from './TimeDisplay'

export abstract class TimeExpressionFuture extends TimeExpression  {
    get diff()
    {
        return Math.abs(this.now.diff(this.moment));
    }
}

export class TimeDiffFutureSeconds extends TimeExpressionFuture implements TimeDisplayInterface
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
export class TimeDiffFutureMinutes extends TimeExpressionFuture implements TimeDisplayInterface
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
export class TimeDiffFutureHours extends TimeExpressionFuture implements TimeDisplayInterface
{
    get display()
    {
        if (this.diff < this.day) {
            const v = Math.round(this.diff / this.hour);
            return v > 1 ? `after ${v} hours` : `after ${v} hour`
        }
    }
}
export class TimeDiffFutureDays extends TimeExpressionFuture implements TimeDisplayInterface
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
export class TimeDiffFutureMonths extends TimeExpressionFuture implements TimeDisplayInterface {
    get display()
    {
        if (this.diff < this.year)
        {
            const v = Math.round(this.diff / this.month);
            return v > 1 ? `after ${v} months` : `after ${v} month`
        }
    }
}
export class TimeDiffFutureYears extends TimeExpressionFuture implements TimeDisplayInterface {
    get display()
    {
        if (this.diff >= this.year)
        {
            const v = Math.round(this.diff / this.year);
            return v > 1 ? `after ${v} years` : `after ${v} year`
        }
    }
}

export class TimeDiffFuture extends TimeExpression {
    get future() {
        return this.diff < 0;
    }
    get display()
    {
        if (this.future)
        {
            const expressions : TimeExpressionConstructor[] = [
                TimeDiffFutureSeconds,
                TimeDiffFutureMinutes,
                TimeDiffFutureHours,
                TimeDiffFutureDays,
                TimeDiffFutureMonths,
                TimeDiffFutureYears,
            ];
            return new TimeDisplay({inp: this.moment, expressions}).display;
        }
    }
}