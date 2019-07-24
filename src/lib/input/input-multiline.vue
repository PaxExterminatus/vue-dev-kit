<template>
    <div>
        <input v-model="input" title="Use spaces to separate">
    </div>
</template>

<script>
import Input from "../../views/Input";
export default {
    components: {Input},

    data(){return{
        input: '',
    }},

    watch:{
        input(nVal){
            this.$emit('input',nVal.split(' '));
        },
    },
}
</script>