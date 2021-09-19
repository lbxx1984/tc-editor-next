<template>
    <div>hello</div>
    <span>{{shit}}asda999asdss</span>
    {{count}}
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'App',
        data() {
            return {
                shit: 'shit'
            };
        },
        computed: {
            count(): number {
                return this.$store.state.count;
            }
        },
        mounted() {
            setInterval(() => {
                this.$store.commit('increment', 2);
            }, 1000);
        }
    });
</script>