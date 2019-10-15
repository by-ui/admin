<template>
    <div class="frame-list-view-filter">
        <filter-item v-for="(n,index) in 6"
                     :key="index"></filter-item>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import FilterItem from "./filter-item.vue"

    @Component({
        components: {
            FilterItem
        }
    })
    export default class FrameListViewFilter extends Vue {
    }
</script>
<style lang="scss" scoped>
    @import "~utils-scss";

    .frame-list-view-filter {
        margin-bottom: 15px;
        @include clearfix();
        /deep/ input {
            width: 160px;
            display: inline-block;
        }
    }
</style>