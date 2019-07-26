import moment from 'moment'
import {TimeDisplay} from './TimeDisplay'
import {TimeDifference} from './TimeDifference'
import {MomentInput, Moment} from 'moment'

export type TimeExpressionArgs = {
    inp: MomentInput,
}

export class TimeExpression implements TimeDisplay {
    moment: Moment;
    constructor({inp} : TimeExpressionArgs){
        this.moment = moment(inp);
    }

    get yesterday(){
        return this.moment.isSame(moment().subtract(1,'d'),'d');
    }
    get today(){
        return this.moment.isSame(moment(),'d');
    }
    get tomorrow(){
        return this.moment.isSame(moment().add(1,'d'),'d');
    }

    get vYesterday(){
        return 'yesterday'
    }
    get vToday(){
        return 'today'
    }
    get vTomorrow(){
        return 'tomorrow'
    }

    get display()
    {
        if (this.yesterday) return this.vYesterday;
        if (this.today) return this.vToday;
        if (this.tomorrow) return this.vTomorrow;
        return new TimeDifference({withInp: this.moment}).display;
    }

    toString(){
        return this.display;
    }
}