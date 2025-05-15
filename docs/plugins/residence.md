# 领地
### **请根据教程进行领地创建**
::: tip 摘要
本服选点工具为**木锄**，分别用其左键右键方块选择第一个第二个点形成空间长方体，再结合以下命令即可画出领地
:::

## 教程：创建领地
::: details 使用木锄
0. **准备**
- 确认建筑的范围<br>
- 准备一个**木锄**用于选点<br>
（此处使用投影模组用于表示范围）
![residence.png](/assets/plugins/residence/1.png)<br>
1. **选择第一选取点**
- 手持**木锄**对建筑的第一个角点按左键
- 此时聊天栏显示`已选择 第一个 选取点 X:~ Y:~ Z:~`
![residence.png](/assets/plugins/residence/2.png)<br>
2. **选择第二选取点**
- 手持**木锄**对建筑的第二个角点按左键
- 此时聊天栏显示`已选择 第二个 选取点 X:~ Y:~ Z:~`
- 物品栏上方显示`选区总大小: ~ 领地价格: ~` 
![residence.png](/assets/plugins/residence/3.png)<br>
:::
::: details 使用指令
1. **准备**
- 使用F3+G确定区块
- 可以配合木锄选框使用
2. **使用指令选择**
- `/res select chunk` – 选取一整个区块。
- `/res select expand [格数]` – 向你的前方延伸选区。
- `/res select size` – 显示已选择区域的尺寸。
- `/res select shift [格数]` – 向你的前方移动选区。
- `/res select vert` – 把选区延伸到从天顶到地底。 
:::




3. **创建领地**
- 输入指令`/res create <领地名称>`
::: warning
领地名称仅能使用 **英语字母** **数字**<br>
否则会提示`名称中包含无效字符`
:::

::: warning
创建领地时请确保 **金钱足够**<br>
否则会提示`你没有足够的金钱`
:::
- 如果以上条件都满足，不出意外此时聊天栏显示<br>`你创建了领地区域，ID为 main` 、`你创建了领地<领地名称>！` 

## 管理领地
### 领地标志
为你的领地设置**标志**(flags):
- 你可以为你创建的领地添加若干个**标志**来保护它。<br>

使用以下指令为你的领地设置标志:<br>
`/res set <领地名称> <标志项目> <true/false>`<br>
::: info 例子
`/res set <领地名称> build false` - 这将会禁止除拥有者以外的其他玩家在领地 `<领地名称>`上建筑。<br>
`/res set <领地名称> move false` - 这将会禁止除拥有者以外的其他玩家在领地 `<领地名称>`上移动。<br>
:::

**权限组标志**<br>
如果你想为一个权限组添加标志,使用以下指令:<br>
`/res gset <领地名称> <权限组> <标志项目> <true/false>`
::: info 例子
`/res gset <领地名称> ops move true` - 这将会允许所有OP在领地 `<领地名称>`上移动, 也包括领地的拥有者。<br>
:::

**玩家标志**<br>
一些标志同样适用于玩家。 你可以使用`pset`指令为玩家设置标志权限。<br>
`/res pset <领地名称> <具体玩家> <标志项目> <true/false>`
::: info 例子
`/res pset <领地名称> 17ik0 build true` 这个指令意味着即使领地的权限设置`BUILD`标志为`FALSE`，玩家17ik0也能够在领地上建筑。当玩家试图在领地内做某事时，他们的玩家标志会首先被检查，如果没有找到，则检查权限组标志，最后检查最终标志。
:::

::: tip 
以上命令不写领地名则为当前所在的领地
:::

::: details 标志项目
> [!NOTE]
> 以下是有关标志项目(flag)的一些介绍。<br>
> 除非另有说明，所有的标志的默认值为`True`。<br>
> 完整标志列表请查看:[WIKI](https://github.com/bluesadi/ResidenceChineseTutorial/wiki/标志和指令-Flags-and-Commands)<br>

- `<admin>` - 允许或禁止玩家在为领地设置flag。 `True` =允许，false =不允许。默认为false。该flag仅适用于玩家。
- `<animals>` - 允许或禁止动物生成。 `True` =允许生成，`false` =禁止生成。也包括外部命令，例如`/spawnmob`。动物包括：鸡，牛，猪，羊，狼，兔，马。
- `<animalkilling>` - 允许或禁止玩家杀死动物。
- `<brew>` - 允许或禁止玩家使用酿造台。
- `<bed>` - 允许或禁止玩家使用床。
- `<button>` - 允许或禁止玩家使用按钮。
- `<burn>` - 允许或禁止领地中的怪物燃烧。
- `<build>` - 控制建筑权限(放置和破坏方块)，也可以防止践踏农作物。`True` =允许建筑，`false` =禁止建筑。
- `<cake>` - 允许或禁止玩家吃蛋糕。
- `<craft>` - 提供:`table, enchant, brew`权限.
- `<container>` - 控制使用任何与GUI界面有关的物品的能力，包括：箱子，发射器，熔炉，还有唱片机。 `True` =允许使用，`false` =禁止使用。
- `<creeper>` - 控制苦力怕爆炸。`True`=苦力怕爆炸并且会破坏地形，`false`=苦力怕不会对玩家或方块造成伤害。不会阻止苦力怕生成。
- `<damage>` - 控制领地中对玩家造成的任何伤害。`True` =正常伤害，`false` =防止伤害。
- `<destroy>` - 允许或禁止破坏方块，会覆盖`build`标志。
- `<diode>` - 允许或禁止玩家使用红石中继器。
- `<door>` - 允许或禁止玩家使用门和活板门。
- `<enchant>` - 允许或禁止玩家附魔。
- `<firespread>` - 允许或禁止火焰蔓延。`True`=允许火焰蔓延，`false`=禁止火焰蔓延。
- `<flow>` - 允许或禁止液体流动。 `True` =允许，`false` =禁止。
- `<healing>` - 控制区域是否自动治愈玩家。 `True` =每秒回复半点血量，`false`=正常服务器规则。
- `<hiden>` - 从 `/list` 或 `/listall` 指令中隐藏该领地。
- `<ignite>` - 允许或禁止点火。`True`=允许点火，`false`=防止点火。
- `<lavaflow>` - 允许或禁止熔浆流动，覆盖`flow`标志。
- `<leash>` - 允许或禁止拴绳。
- `<lever>` - 允许或禁止玩家使用拉杆。
- `<monsters>` - 控制怪物生成。 `True` =允许生成，`false` =防止生成。包括外部命令，例如`/spawnmob`。怪物包括：苦力怕，巨人，骷髅，蜘蛛，僵尸(猪人)。
- `<mobkilling>` - 允许或禁止杀死怪物。
- `<move>` - 控制玩家或权限组是否可以在领地内移动。 `True` =允许移动，`false` =禁止移动。
- `<note>` - 允许或禁止玩家使用音符盒。
- `<nofly>` - 允许或禁止在领地内飞行。覆盖`residence.fly.override`权限节点。
- `<place>` - 允许或禁止方块的放置，覆盖`build`标志。
- `<piston>` - 允许或禁止使用活塞。 `True` =允许使用，`false` =禁止活塞移动。不控制放置或破坏活塞。
- `<pvp>` - 控制PVP。 `True` =允许PVP，`false` =玩家不能攻击其他玩家或驯服的狼。
- `<pressure>` - 允许或禁止玩家使用压力板。
- `<redstone>` - 提供`lever, diode, button, pressure, note`权限。
- `<subzone>` - 允许或禁止创建子领地。 `True` =允许，`false` =不允许。默认为`false`。
- `<shear>` - 允许或禁止剪羊毛。
- `<table>` - 允许或禁止玩家使用工作台。
- `<tnt>` - 控制TNT爆炸。`True`= TNT会爆炸且会破坏方块，`false`= TNT不会对玩家或方块造成伤害。不阻止TNT放置或破坏。
- `<trusted>` - 将玩家添加至领地的信任列表并提供以下权限：`use，tp，build，container，bucket，move，leash，animalkilling，mobkilling，shear`。
- `<tp>` - 控制领地中的传送。 `True` =允许传送，`false` =阻止传送。
- `<use>` - 控制在领地中使用对物品的权限。 `True` =正常服务器规则，`false` =拒绝使用。包括门，箱子，熔炉，发射器，拉杆等。如果为`True`，覆盖`container`标志。
- `<vehicledestroy>` - 允许或禁止破坏载具。
- `<waterflow>` - 允许或禁止水流，覆盖`flow`标志。
- `<command>` - 允许或禁止在领地中使用指令。
- `<nomobs>` - 禁止怪物进入领地。
:::







## 指令
::: tip
因为MCBBS已404，所以此处展示全部内容。部分指令**普通玩家**不可用<br>
细致功能详见[WIKI](https://github.com/bluesadi/ResidenceChineseTutorial/wiki/)[可能包含过时内容]<br>
以下摘自[MCBBS](http://www.mcbbs.net/thread-18529-1-1.html)[404]<br>
:::

**总命令**<br>
- `/res ? [页数]` – 显示帮助，不写页数则显示第一页.<br>
- `/resadmin` – 在使用管理命令时使用<br>

 **选择命令**<br>
- `/res select [x] [y] [z]` – 选择领地的长方体区域，X Y 和 Z 都是从你当前位置为中心的距离，你也可以用木锄来选择地块。 <br>
- `/res select chunk` – 选取一整个区块。 <br>
- `/res select expand [格数]` – 向你的前方延伸选区。<br>
- `/res select size` – 显示已选择区域的尺寸。<br>
- `/res select shift [格数]` – 向你的前方移动选区。<br>
- `/res select vert` – 把选区延伸到从天顶到地底。 <br>

**创建命令**<br>
- `/res area [add/remove/replace] <领地名> [区域id]` – 向叫做[领地名]的领地增加(add)、从其中去除(remove)或是替换 (replace) 区域。可与同一领地内的区域重合。 <br>
- `/res create [领地名]` – 选择好区域后创建一个叫做[领地名]的领地<br>
- `/res remove [领地名]` – 移除一个叫[领地名]的领地<br>
- `/res removeall` – 移除所有领地<br>
- `/res subzone <领地名> [子区域名]` – 在领地内创建一块子区域，你必须是所有者才行。<br>

**信息命令**<br>
- `/res area list [领地名]` – 列出某领地的所有区域<br>
- `/res area listall [领地名]` – 列出某领地的所有区域以及他们的坐标<br>
- `/res current` – 显示你所在的领地<br>
- `/res info <领地名>` – 得到某领地的信息<br>
- `/res list` – 显示你拥有的领地<br>
- `/res listall` – 显示所有领地<br>
- `/res limits` – 显示重要的权限<br>
- `/res sublist` – 显示你所在领地的所有子区域<br>
- `/res version` – 显示插件版本<br>

**权限命令**<br>
- `/res gset <领地名> [群组名] [权限] [true/false/remove]` – 设置某领地对于某群组的权限<br>
- `/res lset <领地名> [黑名单/忽略名单] [材质]` – 从某领地的黑名单/忽略名单中增加/移除某材质
- `/res lset <领地名> info` – 显示某领地的黑名单/忽略名单设置<br>
- `/res pset <领地名> [玩家名] [权限] [true/false/remove]` – 设置某领地对于某玩家的权限<br>
- `/res set <领地名> [权限] [true/false/remove]` – 设置某领地的权限<br>



**其他命令**<br>
- `/res default [领地名]` – 重置某领地的权限设置<br>
- `/res give [领地名] [玩家名]` – 将某领地赠与某玩家，你必须是领主且被赠予玩家在线<br>
- `/res lists` – 预定领地许可清单的详细信息<br>
- `/res message [领地名] [enter/leave] [信息]` – 设置进入/退出某领地时候显示的信息<br>
- `/res message [领地名] remove [enter/leave]` – 移除进入/退出某领地时候的信息<br>
- `/res mirror [源领地名] [目标领地名]` – 复制源领地的权限设置至目标领地<br>
- `/res rename` – [旧名称] [新名称] 重命名领地.对于子空间旧名称必须全名，新名称可以只写子空间名<br>
- `/res renamearea [领地名] [旧名称] [新名称]` – 重命名某领地中某区域的名称<br>
- `/res tp [领地名]` – 传送至某领地<br>
- `/res tpset` – 设置当前领地的传送点为你站立的地方<br>
- `/res unstuck` – 将你从当前领地移出<br>


**交易命令**<br>
- `/res lease [renew/cost] [领地名]` – 更新/显示 更新一个领地的费用（？意义不明）<br>
- `/res market list` – 显示在售的所有领地<br>
- `/res market info [领地名]` – 显示在售的某领地的信息<br>
- `/res market sell [领地名] [价格]` – 将某领地出售<br>
- `/res market unsell [领地名]` – 将某领地下架<br>
- `/res market buy [领地名]` - 购买某领地<br>
- `/res market rentable [领地名] [价格] [天数] <repeat:t/f>` – 将某领地以[价格]/[天数]出租并设置可否自动续期<br>
- `/res market rent [领地名] <repeat:t/f>` – 设置某领地出租手否可自动续期<br>
- `/res market release [领地名]` – 解除某领地的出租<br>

**管理命令**<br>
- `/resadmin lease set [领地名] [#天数/infinite]` – 设置领地的时间限制或不限时<br>
- `/resadmin removeall [玩家名]` – 移除某玩家的所有领地<br>
- `/resadmin setowner [领地名] [玩家名]` – 将某领地以交给某玩家<br>
- `/resadmin server [领地名]` – 将某领地设置为服务器领地<br>
- `/resload` – 载入领地插件. *注* 在res.yml的任何改变都不会被还原. 你可以再更改过res.yml后想立即将新设置生效的时候使用此命令<br>
- `/rereload` – 重载领地插件. *注* 将会还原res.yml为初始状态. 如果你在res.yml更改过设置请不要使用此命令<br>

