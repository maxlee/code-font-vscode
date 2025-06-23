# CodeFont - VS Code Font Management Extension

**CodeFont** 是一个专为VS Code设计的字体管理扩展，旨在简化程序员在编辑器中切换字体的工作流程。无需手动编辑配置文件，即可轻松、快速地切换和应用字体。

## ✨ 核心功能

### 🔍 智能字体发现
- 自动检测系统上安装的等宽编程字体
- 支持Windows、macOS和Linux多平台
- 只显示适合编程的等宽英文字体
- 智能过滤非等宽字体，确保代码对齐效果
- 优先显示常用编程字体（Fira Code、JetBrains Mono、Source Code Pro等）
- **按 A-Z 字母顺序排列**，便于快速查找所需字体
- 后台缓存字体信息，提升性能

### ⚡ 快速字体切换
- **命令面板集成**：通过 `CodeFont: Select Font` 快速选择字体
- **状态栏显示**：实时显示当前字体信息，点击即可切换
- **收藏夹功能**：收藏常用字体，**按字母顺序排列**便于访问
- **预设字体大小**：预定义多种字体大小供快速切换

### 👀 实时预览
- **即时预览**：在选择字体时实时预览效果
- **悬停预览**：鼠标悬停在字体选项上即可预览
- **应用确认**：预览满意后一键应用，或轻松取消

### 💾 持久化设置
- 自动保存字体配置
- 跨VS Code会话保持设置
- 支持全局、工作区和文件夹级别的配置

### 🎨 字体变体支持
- 支持字体粗细、样式调整
- 字间距和行高配置
- 字体大小预设管理

## 🚀 快速开始

### 使用方法

#### 切换字体
1. **通过活动栏面板**（推荐）：
   - 点击左侧活动栏的 CodeFont 图标
   - 在 Font Explorer 中浏览字体分区
   - **点击字体名称即可应用**，当前字体会标记为选中状态
   - 使用星形图标管理收藏夹字体
   - **优化体验**：应用字体后不会从列表中移除，避免界面跳动
   - **极简设计**：移除所有冗余功能，打造零操作成本的字体切换体验

2. **通过命令面板**：
   - 按 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (macOS)
   - 输入 "CodeFont: Select Font"
   - 从列表中选择字体

3. **通过状态栏**：
   - 点击右下角状态栏中的字体信息
   - 直接从弹出菜单选择新字体

#### 字体大小调整
- 使用 `CodeFont: Toggle Font Size` 命令
- 从预设尺寸中快速选择

#### 字体预览
- 使用 `CodeFont: Preview Font` 命令
- 在不永久更改的情况下预览字体效果

## ⚙️ 配置选项

在VS Code设置中搜索 "CodeFont" 查看所有配置选项：

```json
{
  "codefont.autoDetectFonts": true,        // 启动时自动检测字体
  "codefont.showStatusBar": true,          // 在状态栏显示当前字体
  "codefont.previewEnabled": true,         // 启用实时预览功能
  "codefont.favoritefonts": [],            // 收藏的字体列表
  "codefont.defaultFont": "Consolas",      // 默认字体
  "codefont.fontSizePresets": [12, 13, 14, 15, 16, 17, 18, 19, 20],  // 预设字体大小
  "codefont.strictFontMode": false         // 严格字体模式（仅使用选中字体，无后备字体）
}
```

### ⚠️ 严格字体模式说明

- **默认模式（推荐）**：`"codefont.strictFontMode": false`
  - 字体配置：`"JetBrains Mono", Consolas, Monaco, "Courier New", monospace`
  - 优点：即使主字体不可用，也会使用等宽后备字体，保证代码对齐
  - 适用：团队开发、跨平台项目、字体环境不确定的情况

- **严格模式**：`"codefont.strictFontMode": true`  
  - 字体配置：`"JetBrains Mono"`（仅主字体）
  - 优点：完全一致的字体体验，配置简洁
  - 风险：主字体不可用时可能回退到非等宽字体，破坏代码对齐
  - 适用：个人使用且确保字体始终可用的情况

## 📋 命令列表

| 命令 | 描述 |
|------|------|
| `CodeFont: Select Font` | 打开字体选择器 |
| `CodeFont: Toggle Font Size` | 切换字体大小 |
| `CodeFont: Preview Font` | 预览字体效果 |
| `CodeFont: Refresh Fonts` | 刷新可用字体列表 |
| `CodeFont: Reset to Default` | 重置为默认字体设置 |

## � 更多信息

- 📖 [详细使用指南](./USAGE_GUIDE.md) - 完整的功能说明和使用技巧
- 🎛️ [可视化面板指南](./VISUAL_PANEL_GUIDE.md) - Font Explorer 面板详细使用方法
- 🔧 [技术设计文档](./TECHNICAL_DESIGN.md) - 架构设计、开发环境设置和贡献指南
- 🚀 [构建发布指南](./BUILD_AND_PUBLISH_GUIDE.md) - 构建、测试和发布流程

## 📄 许可证

MIT License

## 🔗 链接

- [GitHub 仓库](https://github.com/maxlee/codefont-vscode)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=codefont.codefont)
- [问题反馈](https://github.com/maxlee/codefont-vscode/issues)

---

**享受更好的编程字体体验！** 🎉
