# 传送
### **基础传送功能包含 HOME、TPA、SPAWN 等**
::: tip 
此处仅展示**普通玩家**可以使用的指令<br>
完整指令列表详见[WIKI](https://william278.net/docs/huskhomes/commands)
:::
## 基本功能
### TPA系列指令
- `/tpa <玩家ID>` - 请求传送到`<玩家 ID>`处
- `/tpahere <玩家ID>` - 请求`<玩家ID>`传送至你处
- `/tpaccept`&`/tpyes` - 接受您收到的最后一个传送请求
- `/tpaccept <玩家ID>` - 接受来自`<玩家ID>`的传送请求
- `/tpdecline`&`/tpno`/`/tpdeny` - 拒绝您收到的最后一个传送请求
- `/tpdecline <玩家ID>` - 接受来自`<玩家ID>`的传送请求
- `/tpignore` - 切换是否忽略传入的传送请求（免打扰）
### BACK系列指令
- `/back` - 回到上一个地点（死亡处/传送前位置）
### SPAWN系列指令
- `/spawn` - 传送到服务器出生点
### WARP系列指令
- `/warp`/`/warplist` - 打开地标UI
- **左键**：传送
![tp.png](/assets/plugins/tp/1.png)
### HOME系列指令
- `/home`/`/homelist` - 显示家UI
- `/home <家名称>` - 传送到`<家名称>`
- `/sethome <家名称>` - 设置家：`<家名称>`（设置一个家需要350ᴄɴʏ）
- `/delhome <家名称>` - 删除家：`<家名称>`（删除后返还设置金钱）3
- `/edithome <家名称>` - 查看`<家名称>`的信息
- `/edithome <家名称> rename <新名称>` - 将家`<家名称>`的名称更改为`<新名称>`
- `/edithome <家名称> description <描述>` - 将家`<家名称>`的描述设置为`<描述>`
- `/edithome <家名称> relocate` - 将家`<家名称>`的位置更新为当前所在位置
- `/edithome <家名称> privacy [public|private]` - 设置`<家名称>`的隐私（公共|私有）
- `/phome`&`/phomelist` - 打开公共家UI
- `/phome <公共家名称>` - 传送到`<公共家名称>`
- **左键**：传送
![tp.png](/assets/plugins/tp/2.png)