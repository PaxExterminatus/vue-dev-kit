import {Moment, MomentInput} from "moment";
import {TimeExpression} from "./TimeExpression";

export interface TimeExpressionInterface
{
    readonly moment : Moment
    readonly display: string | undefined
}

export interface TimeExpressionClass
{
    new (inp: MomentInput): TimeExpression;
}

export type TimeExpressionClasses = TimeExpressionClass[]