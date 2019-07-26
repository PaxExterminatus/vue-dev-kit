import {TimeDifferenceArgs,TimeDifference} from './TimeDisplay/TimeDifference'
import {TimeExpressionArgs,TimeExpression} from './TimeDisplay/TimeExpression'

export function diff(params: TimeDifferenceArgs): TimeDifference {
    return new TimeDifference(params)
}
export function exp(params: TimeExpressionArgs): TimeExpression {
    return new TimeExpression(params)
}
