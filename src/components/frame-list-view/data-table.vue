<template>
    <div class="data-table">
        <by-table :columns="optionList"
                  :data="listData"
                  pageSize="20"></by-table>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";

    @Component
    export default class DataTable extends Vue {
        @Prop()
        listData: any;

        @Prop()
        optionList!: any[];

    }
</script>
<style lang="scss" scoped>
    .data-table {
        padding: 0 8px;
    }
</style>