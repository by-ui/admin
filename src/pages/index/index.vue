<template>
    <frame-list-view class="index"
                     :listData="listData"
                     :optionList="optionList">
        <template #popup>
            <by-drawer title="修改"
                       :visible.sync="drawer.visible"
                       :direction="drawer.direction">
                <detail-edit></detail-edit>
            </by-drawer>
        </template>
    </frame-list-view>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import detailEdit from './detail-edit.vue';

    @Component({
        components: {
            detailEdit
        }
    })
    export default class Index extends Vue {

        row: any = "";

        drawer = {
            visible: false,
            direction: 'rtl'
        };

        listData = this.makePageData();

        optionList = [{
            title: '姓名',
            key: 'name'
        },
        {
            title: '年龄',
            key: 'age',
            sortType: 'normal'
        },
        {
            title: '地址',
            key: 'address'
        },
        {
            title: '操作',
            render: (h, params) => {
                return h('div', [
                    h('by-button', {
                        props: {
                            size: 'small',
                            hollow: true
                        },
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => {
                                this.$message(params.item.name)
                            }
                        }
                    }, '查看姓名'),
                    h('by-button', {
                        props: {
                            size: 'small',
                            hollow: true
                        },
                        on: {
                            click: () => {
                                this.drawer.visible = true;
                            }
                        }
                    }, '编辑')
                ])
            }
        }];

        makePageData() {
            const data = [
                {
                    name: '库里',
                    age: 18,
                    address: '深圳市宝安区创业一路'
                },
                {
                    name: '姚明',
                    age: 25,
                    address: '广州市天河区岗顶'
                },
                {
                    name: '詹姆斯',
                    age: 25,
                    address: '广州市天河区岗顶'
                },
                {
                    name: '科比',
                    age: 24,
                    address: '上海市浦东新区'
                },
                {
                    name: '杜兰特',
                    age: 22,
                    address: '深圳市南山区深南大道'
                },
                {
                    name: '威斯布鲁克',
                    age: 21,
                    address: '北京市朝阳区'
                },
                {
                    name: '邓肯',
                    age: 26,
                    address: '深圳市罗湖区万象城'
                },
                {
                    name: '帕克',
                    age: 25,
                    address: '深圳市福田区中心书城'
                },
                {
                    name: '欧文',
                    age: 20,
                    address: '广州市番禺区大学城'
                },
                {
                    name: '托马斯',
                    age: 19,
                    address: '北京市朝阳区'
                }
            ]
            let pageData = []

            for (let i = 0; i < 1; i++) {
                pageData = pageData.concat(data)
            }

            return pageData
        }

        handleClose(done) {
            done();
        }

        success() {
            // this.drawer.visible = false;
        }

        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .index {
    }
</style>