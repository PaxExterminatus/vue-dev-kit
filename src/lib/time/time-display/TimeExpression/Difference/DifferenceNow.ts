import {TimeExpression} from '../TimeExpression'

export class DifferenceNow extends TimeExpression
{
    get display()
    {
        const diff = Math.abs(this.diff);
        const future = this.diff > 0;

        if (diff < this.second * 5)
            return 'now';
        if (diff < this.second * 10)
            return future ? 'few seconds ago' : 'after few seconds';
    }
}