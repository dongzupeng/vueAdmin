//需要全局化的组件
import Table from "@/components/elementui/Table";
import Select from "@/components/elementui/Select";
import Pagination from "@/components/elementui/Pagination";
import Dialog from "@/components/elementui/Dialog";
import Form from "@/components/elementui/Form";


const components = [
    Table,
    Select,
    Pagination,
    Dialog,
    Form
]
let elementcomponents = {
    install(Vue) {
        components.forEach((item, index) => {
            Vue.component(item.name, item)
        })
    },
};
export default elementcomponents;