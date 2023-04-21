# 将飞机导入到项目
## 安装依赖
::: danger
实际上因为有一部分依赖我们并没有公开修改后的版本，你现在无法按照这篇指南导入飞机。
:::
::: tip
将仓库 clone 或下载 Zip 后使用 Unity 包管理器导入包或者使用 [VRChat Creator Companion](https://vcc.docs.vrchat.com/)
:::
1. 导入 [SaccFlightAndVehicles 1.61](https://github.com/Sacchan-VRC/SaccFlightAndVehicles/releases/tag/1.61)
2. 安装 [YuxiFlightInstruments](https://github.com/Heriyadi235/YuxiFlightInstrumentsforSF)
3. 安装 [修改版本的 EsnyaSFAddons](https://github.com/Heriyadi235/EsnyaSFAddons/tree/beta)
4. 安装 UdonRadioCommunication
::: warning
- **只需**导入 `Packages/com.nekometer.esnya.esnya-sf-addons`，**不要**导入 `com.nekometer.esnya.esnya-sf-addons-ucs`（因为我没有尝试过udonchip，所以可能有兼容性问题）
- 该修改版本的 这个EsnyaSFAddons 因为修改/污染了原分支的大部分内容，与原分支并不兼容，将会在以后试图解决兼容性问题。
:::
## 克隆脚本仓库
克隆 [Heriyadi235/VAU320](https://github.com/vrcau/VAU320) 仓库到项目目录中。
::: warning
不要把文件直接拖入 Unity，而是使用资源管理器将文件直接复制到项目目录或直接 clone 到项目目录。
:::
## 获取资产
VAU320 Github 仓库中并未包含飞机的网格、纹理、动画以及音效，这些需要在 VRChat Aerospace University 的 QQ 群组：[526014547](https://jq.qq.com/?_wv=1027&k=oH8yHGNS) 的群文件获取。
::: warning
群文件内的 Unitypackage 暂未更新，需要**手动选择**只导入资产包中的 `/YuxiPlanes/A320NEO/` 文件夹及其中内容
:::
