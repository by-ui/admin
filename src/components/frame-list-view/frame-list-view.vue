<template>
    <div class="frame-list-view"
         id="frame-list-view">
        <ul class="bread-list">
            <li>应用系统</li>
            <li>&nbsp;&nbsp;>&nbsp;编辑授权信息</li>
        </ul>
        <filtes ref="filters"></filtes>
        <data-table class="data-table"
                    :list-data="listData"
                    :option-list="optionList"
                    :tableHeight="tableHeight"></data-table>
        <slot name="popup"></slot>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    import Filtes from "./filter/filter.vue";
    import DataTable from "./data-table.vue";

    @Component({
        components: {
            Filtes,
            DataTable,
        }
    })
    export default class FrameListView extends Vue {

        /** 获取数据方法 */
        @Prop({
            default: false
        })
        getData!: (() => Promise<any>) | false;

        /** 数据 */
        @Prop()
        listData!: any[];

        /** 表格配置 */
        @Prop()
        optionList!: any[];

        /** 分页配置 */
        @Prop()
        pageOption?: any;

        tableHeight = '';

        caleTableHeight() {
            const frameView_height = document.getElementById("frame-list-view").scrollHeight;
            const filter_height = this.$refs["filters"]["$el"].scrollHeight;

            this.tableHeight = (frameView_height - filter_height - 220).toString();
        }

        initData() {
            if (typeof this.getData == 'function') {
                this.getData().then(() => { }).finally(() => { });
            }
        }

        mounted() {
            this.initData();
            window.setTimeout(() => {
                this.caleTableHeight();
            }, 123)
        }
    }
</script>
<style lang="scss" scoped>
    @import "~utils-scss";
    .frame-list-view {
        padding: 16px;
        .data-table {
        }
        .bread-list {
            margin-bottom: 20px;
            box-shadow: 0 1px 4px 0 #e3e8ee;
            overflow: hidden;
            border-bottom: 1px solid #e3e8ee;
            padding: 0 20px;
            @include clearfix();
            li {
                font-size: 12px;
                float: left;
                line-height: 56px;
                font-weight: 400;

                &:first-child {
                    cursor: pointer;
                    color: #39f;
                }
            }
        }
        .big-title{
            font-size: 16px;
                    color: #39f;
                    padding-left: 10px;
                    padding-bottom: 20px;
        }
    }
</style>