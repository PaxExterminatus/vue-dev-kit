import {TimeExpression,TimeExpressionClass} from './TimeExpression'
import {TimeDisplay} from "./TimeDisplay";

export class TimeDiffFutureSeconds extends TimeExpression {
    display() {
        if (this.diff < this.minute) {
            const v = Math.round(this.diff / this.second);
            return v > 1 ? `in ${v} seconds` : `in ${v} second`
        }
    }
}
export class TimeDiffFutureMinutes extends TimeExpression {
    display() {
        if (this.diff < this.hour) {
            const v = Math.round(this.diff / this.minute);
            return v > 1 ? `after ${v} minutes` : `after ${v} minute`
        }
    }
}
export class TimeDiffFutureHours extends TimeExpression {
    display() {
        if (this.diff < this.day) {
            const v = Math.round(this.diff / this.hour);
            return v > 1 ? `after ${v} hours` : `after ${v} hour`
        }
    }
}
export class TimeDiffFutureDays extends TimeExpression {
    display() {
        if (this.diff < this.month) {
            const v = Math.round(this.diff / this.day);
            return v > 1 ? `after ${v} days` : `after ${v} day`
        }
    }
}
export class TimeDiffFutureMonths extends TimeExpression {
    display() {
        if (this.diff < this.year) {
            const v = Math.round(this.diff / this.month);
            return v > 1 ? `after ${v} months` : `after ${v} month`
        }
    }
}
export class TimeDiffFutureYears extends TimeExpression {
    display() {
        if (this.diff >= this.year) {
            const v = Math.round(this.diff / this.year);
            return v > 1 ? `after ${v} years` : `after ${v} year`
        }
    }
}

export class TimeDiffFuture extends TimeExpression {
    display(): string | undefined {
        const expressions : TimeExpressionClass[] = [
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