<template>
    <time :datetime="viewDatetime" :title="viewTitle">{{diff}}</time>
</template>

<script>
import moment from 'moment';
import conf from 'lb/time.config'
import {diff} from 'time/Time';
import {RelativeTimeDisplayOpt} from './RelativeTimeDisplayKit';
export default {
    props: {
        opt: {type: RelativeTimeDisplayOpt, default: () => conf.relativeTimeDisplayOpt},
        date: {},
    },
    data(){return{
        diff: diff({withInp: this.date}),
        moment: moment(this.date),
    }},

    computed:{
        viewTitle(){
            return `${this.moment.format(this.opt.titleFormat)}`;
        },
        viewDatetime(){
            return this.moment.format('YYYY-MM-DDTHH:mm:ssZ');
        }
    }
}
</script>