
export interface TimeDifferenceDisplay {
    vSecond(v:number):string
    vMinute(v:number):string
    vHour(v:number):string
    vDay(v:number):string
    vMonth(v:number):string
    vYear(v:number):string
}

export class DisplayPast implements TimeDifferenceDisplay {
    vSecond = (v:number) => v > 1 ? `${v} seconds ago` : `${v} second ago`;
    vMinute = (v:number) => v > 1 ? `${v} minutes ago` : `${v} minute ago`;
    vHour   = (v:number) => v > 1 ? `${v} hours ago`   : `${v} hour ago`;
    vDay    = (v:number) => v > 1 ? `${v} days ago`    : `${v} day ago`;
    vMonth  = (v:number) => v > 1 ? `${v} months ago`  : `${v} month ago`;
    vYear   = (v:number) => v > 1 ? `${v} years ago`   : `${v} year ago`;
}

export class DisplayFuture implements TimeDifferenceDisplay {
    vSecond = (v:number) => v > 1 ? `in ${v} seconds`    : `in ${v} second`;
    vMinute = (v:number) => v > 1 ? `after ${v} minutes` : `after ${v} minute`;
    vHour   = (v:number) => v > 1 ? `after ${v} hours`   : `after ${v} hour`;
    vDay    = (v:number) => v > 1 ? `after ${v} days`    : `after ${v} day`;
    vMonth  = (v:number) => v > 1 ? `after ${v} months`  : `after ${v} month`;
    vYear   = (v:number) => v > 1 ? `after ${v} years`   : `after ${v} year`;
}