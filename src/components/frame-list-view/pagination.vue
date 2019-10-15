<template>
    <div class="frame-list-view-pagination">
        <by-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="pageOption.size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="pageOption.total">
        </by-pagination>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class FrameListViewPagination extends Vue {

    @Prop({
        default:{
            size: '10',
            total: '10'
        }
    })
    pageOption!: any;

    currentPage = 1;

    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    }

    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    }
}
</script>
<style lang="scss" scoped>
.frame-list-view-pagination {
    float: right;
    margin-top: 10px;
}
</style>