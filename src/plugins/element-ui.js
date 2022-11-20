import Vue from "vue";
//引入组件库
import {
    Input,
    Button,
    Card,
    Form,
    FormItem,
    Loading,
    MessageBox,
    Message,
    Notification,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
    Table,
    TableColumn,
    Pagination,
    Dialog,
    Radio,
    RadioGroup,
    Select,
    Option,
    OptionGroup,
    Switch,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    DatePicker,
    TimeSelect,
    TimePicker,
    Slider,
    Upload,
    Tag,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Avatar,
    Divider,
    Progress,
    Backtop
} from 'element-ui';


Vue.use(Input);
Vue.use(Button);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn); 
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Switch);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Slider);
Vue.use(Upload);
Vue.use(Tag);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Avatar);
Vue.use(Divider);
Vue.use(Progress);
Vue.use(Backtop);


Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;