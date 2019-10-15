<template>
    <div class="app-layout">
        <app-header class="the-header"></app-header>
        <div class="bottom-part">
            <app-left-bar class="the-left-bar"></app-left-bar>
            <div class="app-main-content">
                <content v-theme:background="1">
                    <slot></slot>
                </content>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import appHeader from "./the-layout-header.vue";
import appLeftBar from "./the-layout-leftbar.vue";

@Component({
    components: {
        appHeader,
        appLeftBar
    }
})
export default class AppLayout extends Vue {
}
</script>
<style lang="scss" scoped>
.app-layout {
    width: 100%;
    height: 100%;
    $the-header-height: 60px;
    $the-leftbar-width: 260px;
    .the-header {
        height: $the-header-height;
    }
    .bottom-part {
        display: flex;
        height: calc(100% - #{$the-header-height});
        .the-left-bar {
            height: 100%;
            width: $the-leftbar-width;
        }
        .app-main-content {
            position: relative;
            width: 100%;
            height: 100%;
            content {
                position: relative;
                display: block;
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>