
const {Menu} = require("electron");
 
var menuTemplate=[
    {
        label:"文件",
        submenu:[
            // accelerator 配置快捷键
            {label:'新建',accelerator:"ctrl+n",click:()=>{console.log("新建文件")}},
            {label:'打开',accelerator:"ctrl+o",click:()=>{console.log("打开文件")}},
            {type:"separator"},
            {label:'保存',accelerator:"ctrl+s",click:()=>{console.log("保存文件")}}
        ]
    },
    {
        label:"编辑",
        submenu:[
            // role按角色进行配置
            {label:"复制",role:"copy",click:()=>{console.log("复制文件")}},
            {label:"粘贴",role:"paste",click:()=>{console.log("粘贴文件")}}
        ]
    }
];
// 固定写法
var menuBuilder = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menuBuilder);