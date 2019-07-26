import {Moment} from "moment";

export interface TimeDisplay {
    moment: Moment,
    readonly display: string
    toString(): string
}