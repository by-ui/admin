import Vue, { PluginObject } from 'vue';

import {
    Input,
    Select,
    Option,
    Switch,
    Button,
    Cascader,
    Radio,
    RadioGroup,
    RadioButton,
    Table,
    TableColumn,
    Row,
    Col,
    DatePicker,
    Pagination,
    Alert,
    InputNumber,
    Form,
    FormItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tooltip,
    MessageBox,
    Dialog,
    Notification,
    Message,
    Popover,
    Loading,
    Upload,
    Tag,
    Checkbox,
    TimePicker,
    TimeSelect,
    CheckboxGroup,
    Tree,
    Timeline,
    TimelineItem,
    Progress,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
} from 'element-ui';

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

const Element: PluginObject<never> = {
    install(Vue) {
        Vue.prototype.$ELEMENT = { size: 'mini' };

        Vue.component('el-input', Input);
        Vue.component('el-select', Select);
        Vue.component('el-option', Option);
        Vue.component('el-button', Button);
        Vue.component('el-switch', Switch);
        Vue.component('el-cascader', Cascader);
        Vue.component('el-radio', Radio);
        Vue.component('el-radio-group', RadioGroup);
        Vue.component('el-radio-button', RadioButton);
        Vue.component('el-table', Table);
        Vue.component('el-table-column', TableColumn);
        Vue.component('el-row', Row);
        Vue.component('el-col', Col);
        Vue.component('el-date-picker', DatePicker);
        Vue.component('el-pagination', Pagination);
        Vue.component('el-alert', Alert);
        Vue.component('el-input-number', InputNumber);
        Vue.component('el-form', Form);
        Vue.component('el-form-item', FormItem);
        Vue.component('el-dropdown', Dropdown);
        Vue.component('el-dropdown-menu', DropdownMenu);
        Vue.component('el-dropdown-item', DropdownItem);
        Vue.component('el-tooltip', Tooltip);
        Vue.component('el-dialog', Dialog);
        Vue.component('el-popover', Popover);
        Vue.component('el-upload', Upload);
        Vue.component('el-tag', Tag);
        Vue.component('el-checkbox', Checkbox);
        Vue.component('el-time-picker', TimePicker);
        Vue.component('el-time-select',TimeSelect);
        Vue.component('el-checkbox-group', CheckboxGroup);
        Vue.component('el-tree', Tree);
        Vue.component('el-timeline', Timeline);
        Vue.component('el-timeline-item', TimelineItem);
        Vue.component('el-progress', Progress);
        Vue.component('el-menu', Menu);
        Vue.component('el-submenu', Submenu);
        Vue.component('el-menu-item', MenuItem);
        Vue.component('el-menu-item-group', MenuItemGroup);
        Vue.component('el-breadcrumb', Breadcrumb);
        Vue.component('el-breadcrumb-item', BreadcrumbItem);

        Vue.component('el-collapse-transition', CollapseTransition);

        Vue.use(Loading.directive as PluginObject<never>);

        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$notify = Notification;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$message = Message;
    },
};

Vue.use(Element);

import './element-ui-style-fix.scss';
