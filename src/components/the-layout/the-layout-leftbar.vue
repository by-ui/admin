<template>
    <div class="app-left-bar"
         v-theme:background="1">
        <by-menu active-name="1-1"
                 inline-collapsed>
            <by-menu-sub opened>
                <template slot="title"><i class="icon icon-home"></i>导航菜单一</template>
                <by-menu-item-group title="分组一">
                    <by-menu-item name="1-1">子菜单一</by-menu-item>
                    <by-menu-item name="1-2">子菜单二</by-menu-item>
                </by-menu-item-group>
                <by-menu-item-group title="分组二">
                    <by-menu-item name="1-3">子菜单三</by-menu-item>
                    <by-menu-item name="1-4">子菜单四</by-menu-item>
                </by-menu-item-group>
            </by-menu-sub>
            <by-menu-sub>
                <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单二</template>
                <by-menu-item name="2-1">子菜单一</by-menu-item>
                <by-menu-item name="2-2">子菜单二</by-menu-item>
                <by-menu-item name="2-3">子菜单三</by-menu-item>
                <by-menu-item name="2-4">子菜单四</by-menu-item>
            </by-menu-sub>
            <by-menu-sub>
                <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三</template>
                <by-menu-item name="3-1">子菜单一</by-menu-item>
                <by-menu-item name="3-2">子菜单二</by-menu-item>
                <by-menu-item name="3-3">子菜单三</by-menu-item>
                <by-menu-item name="3-4">子菜单四</by-menu-item>
            </by-menu-sub>
            <by-menu-sub>
                <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单四</template>
                <by-menu-item name="4-1">子菜单一</by-menu-item>
                <by-menu-item name="4-2">子菜单二</by-menu-item>
            </by-menu-sub>
        </by-menu>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class AppLeftBar extends Vue {

    }
</script>
<style lang="scss" scoped>
    .by-menu {
        height: 100%;
    }
</style>