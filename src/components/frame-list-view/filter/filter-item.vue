<template>
    <div class="filter-item">
        <by-input placeholder="请输入公司名称" />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FilterItem extends Vue {
}
</script>
<style lang="scss" scoped>
.filter-item {
    float: left;
    padding: 0 8px;
    margin-bottom: 12px;
}
</style>