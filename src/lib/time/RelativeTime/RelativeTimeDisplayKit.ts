export class RelativeTimeDisplayOpt
{
    titleFormat: string;
    datetimeFormat: string;
    constructor({titleFormat, datetimeFormat} : {titleFormat: string, datetimeFormat: string})
    {
        this.titleFormat = titleFormat;
        this.datetimeFormat = datetimeFormat;
    }
}