<template>
    <div class="app">
        <router-view v-transition></router-view>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class App extends Vue {
    }
</script>
<style lang="scss" scoped>
    .app {
        height: 100%;
    }
</style>
