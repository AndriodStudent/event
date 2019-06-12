# event
# event
使用方法
1、引入event文件
import {$on,$fire} from "event.js"
2、开启监听
$fire('custom-chat-event')

3、在需要的地方加入触发监听事件

$on('custom-chat-event', (data) => {
    console.log{'触发成功',data}
}
