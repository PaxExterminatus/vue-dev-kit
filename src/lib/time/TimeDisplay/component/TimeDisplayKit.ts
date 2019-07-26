import {TimeDisplay} from '../TimeDisplay'

export type TimeExpressionViewOptType = {
    titleFormat: string;
    datetimeFormat: string;
    display: TimeDisplay;
}

export class TimeExpressionViewOpt
{
    titleFormat: string;
    datetimeFormat: string;
    display: TimeDisplay;
    constructor({titleFormat, datetimeFormat, display} : TimeExpressionViewOptType)
    {
        this.titleFormat = titleFormat;
        this.datetimeFormat = datetimeFormat;
        this.display = display;
    }
}