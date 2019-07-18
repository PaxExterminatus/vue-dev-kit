import moment from 'moment'
import {Moment, MomentInput} from 'moment'

type TimePrams  = {inp? : MomentInput}

export class Time {
    moment : Moment;
    constructor({inp} : TimePrams = {})
    {
        this.moment = moment(inp);
        Object.setPrototypeOf(this, moment);
    }
}