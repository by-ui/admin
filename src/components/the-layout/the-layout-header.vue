<template>
    <div class="app-header">
        <div class="icon-dv">
            <img src="@/assets/images/header-icon.svg"
                 class="header-icon"></div>
        <span class="title"
              v-theme:color="0">
            预警系统应用</span>
        <by-menu mode="horizontal"
                 active-name="1">
            <by-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</by-menu-item>
            <by-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</by-menu-item>
            <by-menu-item name="3"><i class="icon icon-life-buoy"></i>导航菜单三</by-menu-item>
            <by-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</by-menu-item>
        </by-menu>
        <div class="header-end">
            <ul class="ul-list">
                <li class="menu-list">
                    <i class="icon icon-cpu"></i>
                </li>
                <li class="menu-list">
                    <i class="icon icon-bar-chart"></i>
                </li>
                <li class="menu-list">
                    <i class="icon icon-bell"></i>
                </li>
                <li class="menu-list">
                    <i class="icon icon-grid"></i>
                </li>
                <li class="menu-list user">
                    <by-dropdown>
                        <i class="icon icon-github user-icon"></i>
                        <by-dropdown-menu slot="menu">
                            <by-dropdown-item><i class="icon icon-user"></i>108108888@qq.com</by-dropdown-item>
                            <by-dropdown-item><i class="icon icon-settings"></i>账号设置</by-dropdown-item>
                            <by-dropdown-item divided="true" @click.native="logout"><i class="icon icon-log-out"></i>退出登录</by-dropdown-item>
                        </by-dropdown-menu>
                    </by-dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class AppHeader extends Vue {
        logout(){
            window.localStorage.removeItem('token');
            this.$router.push({
                name: 'login'
            })
        }
    }
</script>
<style lang="scss" scoped>
    .app-header {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 40px;
        height: 64px;
        background-color: #2b83f9;
        background-image: linear-gradient(143deg, #1d42ab, #2173dc, #1e93ff);
        .icon-dv {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            .header-icon {
                width: 25px;
            }
        }
        .title {
            font-size: 16px;
            color: #ffffff;
        }
        .by-menu {
            border: none;
            background: none;
            color: #fff;
            height: 60px;
            line-height: 60px;
            margin-left: 30px;
            flex: 1;
            /deep/ .by-menu__item {
                opacity: 0.69;
                &.by-menu__item--active {
                    opacity: 1;
                    .by-menu__item-link {
                        color: #fff;
                        &::after {
                            background-color: #4fe3c1;
                            width: 60%;
                            left: 50%;
                            margin-left: -30%;
                            height: 4px;
                        }
                    }
                }
                .by-menu__item-link,
                .router-link-active {
                    color: #fff;
                }
            }
        }
        .header-end {
            display: flex;
            padding-right: 10px;
            align-items: center;
            justify-content: flex-end;
            .menu-list {
                display: inline-block;
                color: rgba(255, 255, 255, 0.75);
                transition: all 0.3s;
                padding: 0px 13px;
                height: 60px;
                line-height: 60px;
                i {
                    font-size: 20px;
                }
                &:hover {
                    color: #fff;
                }
                .by-dropdown-menu {
                    width: 400px;
                }
                /deep/.by-dropdown-menu__item {
                    color: #3f536e;
                    font-size: 12px;
                    padding: 16px 26px;
                    i {
                        font-size: 14px;
                        padding-right: 10px;
                    }
                }
                &.user {
                    .user-icon {
                        border: 2px solid #fff;
                        border-radius: 50%;
                        padding: 5px;
                    }
                }
            }
        }
    }
</style>