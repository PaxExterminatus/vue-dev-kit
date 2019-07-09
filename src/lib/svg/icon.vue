<script>
import {isString} from 'js/typeCheck'
import icon from './cmp/svg-icon'
import icons from './cmp/svg-make'
export default {
    props: {
        name: {}
    },

    components: {
      icon, icons
    },

    render(createElement)
    {
        if (isString(this.name))
        {
            return createElement(
                icon, {
                    props: {
                        name: this.name
                    }
                }
            );
        }
        else if (Array.isArray(this.name))
        {
            return createElement(
                icons, {
                    props: {
                        name: this.name
                    }
                }
            )
        }
    }
}
</script>