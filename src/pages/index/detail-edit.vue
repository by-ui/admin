<template>
    <by-form :model="formData2"
             :rules="ruleLogin2"
             ref="formLogin2"
             :label-width="80">
        <by-form-item prop="name"
                      label="活动名称">
            <by-input v-model="formData2.name"></by-input>
        </by-form-item>
        <!-- <by-form-item prop="password"
                      label="活动区域">
            <by-select v-model="formData2.area">
                <by-option value="1">深圳</by-option>
                <by-option value="2">广州广州广州广州广州广州广州广州广州广州</by-option>
                <by-option value="3">上海</by-option>
                <by-option value="4">北京</by-option>
                <by-option value="5">成都</by-option>
            </by-select>
        </by-form-item> -->
        <by-form-item prop="password"
                      label="即时配送">
            <by-switch v-model="formData2.delivery"></by-switch>
        </by-form-item>
        </el-form-item>
        <by-form-item prop="type"
                      label="活动性质">
            <by-checkbox-group v-model="formData2.type">
                <by-checkbox label="美食/餐厅线上活动"
                             name="type">美食/餐厅线上活动</by-checkbox>
                <by-checkbox label="地推活动"
                             name="type">地推活动</by-checkbox>
                <by-checkbox label="线下主题活动"
                             name="type">线下主题活动</by-checkbox>
                <by-checkbox label="单纯品牌曝光"
                             name="type">单纯品牌曝光</by-checkbox>
            </by-checkbox-group>
        </by-form-item>
        <by-form-item prop="resource"
                      label="特殊资源">
            <by-radio-group v-model="formData2.resource">
                <by-radio label="线上品牌商赞助">线上品牌商赞助</by-radio>
                <by-radio label="线下场地免费">线下场地免费</by-radio>
            </by-radio-group>
        </by-form-item>
        <by-form-item prop="desc"
                      label="活动形式">
            <by-input type="textarea"
                      v-model="formData2.desc"></by-input>
        </by-form-item>
        <by-form-item>
            <by-button type="primary"
                       size="small"
                       @click.prevent="handleSubmit('formLogin2')">登录</by-button>
        </by-form-item>
    </by-form>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class MyComponent extends Vue {

        formData2 = {
            name: '',
            area: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        }

        ruleLogin2 = {
            name: [{
                required: true,
                message: '请输入活动名称',
                trigger: 'blur'
            }],
            area: [{
                required: true,
                message: '请选择活动区域',
                trigger: 'blur'
            }],
            type: [{
                type: 'array',
                required: true,
                message: '请至少选择一个活动性质',
                trigger: 'change'
            }],
            resource: [{
                required: true,
                message: '请选择特殊资源',
                trigger: 'blur'
            }],
            desc: [{
                required: true,
                message: '请输入活动形式',
                trigger: 'blur'
            }],
        }

        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$emit('success');
                    this.$message({
                        type: 'success',
                        message: '提交成功'
                    })
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .main-class {
    }
</style>