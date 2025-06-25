# CodeFont - VS Code Font Management Extension

**CodeFont** is a font management extension designed for VS Code, aiming to simplify the workflow for programmers to switch fonts in the editor. You can easily and quickly switch and apply fonts without manually editing configuration files.

## ✨ Core Features

### 🔍 Intelligent Font Discovery
- Automatically detects monospaced programming fonts installed on your system.
- Supports Windows, macOS, and Linux.
- Displays only monospaced English fonts suitable for programming.
- Intelligently filters out non-monospaced fonts to ensure proper code alignment.
- Prioritizes popular programming fonts (e.g., Fira Code, JetBrains Mono, Source Code Pro).
- **Sorts fonts alphabetically (A-Z)** for quick and easy lookup.
- Caches font information in the background to enhance performance.

### ⚡ Quick Font Switching
- **Command Palette Integration**: Quickly select fonts using `CodeFont: Select Font`.
- **Status Bar Display**: Shows the current font in the status bar; click to switch.
- **Favorites**: Bookmark your favorite fonts, **sorted alphabetically** for easy access.
- **Preset Font Sizes**: Predefined font sizes for quick switching.

### 👀 Real-time Preview
- **Instant Preview**: Get a live preview of fonts as you select them.
- **Hover Preview**: Simply hover over a font option to see how it looks.
- **Apply Confirmation**: Apply the font with one click when you're satisfied, or easily cancel.

### 💾 Persistent Settings
- Automatically saves your font configuration.
- Settings are preserved across VS Code sessions.
- Supports global, workspace, and folder-level configurations.

### 🎨 Font Variant Support
- Adjust font weight and style.
- Configure letter spacing and line height.
- Manage preset font sizes.

## 🚀 Quick Start

### How to Use

#### Switching Fonts
1. **Via the Activity Bar Panel (Recommended)**:
   - Click the CodeFont icon in the left Activity Bar.
   - Browse font sections in the Font Explorer.
   - **Click a font name to apply it**. The current font will be marked as selected.
   - Use the star icon to manage your favorite fonts.
   - **Optimized Experience**: Applying a font does not remove it from the list, preventing UI jumps.
   - **Minimalist Design**: All redundant features have been removed for a zero-effort font switching experience.

2. **Via the Command Palette**:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
   - Type "CodeFont: Select Font".
   - Select a font from the list.

3. **Via the Status Bar**:
   - Click the font information in the bottom-right status bar.
   - Choose a new font from the pop-up menu.

#### Adjusting Font Size
- Use the `CodeFont: Toggle Font Size` command.
- Quickly select from a list of preset sizes.

#### Font Preview
- Use the `CodeFont: Preview Font` command.
- Preview font effects without making permanent changes.

## ⚙️ Configuration Options

Search for "CodeFont" in your VS Code settings to view all available options:

```json
{
  "codefont.autoDetectFonts": true,        // Automatically detect fonts on startup
  "codefont.showStatusBar": true,          // Show the current font in the status bar
  "codefont.previewEnabled": true,         // Enable the real-time preview feature
  "codefont.favoriteFonts": [],            // A list of your favorite fonts
  "codefont.defaultFont": "Consolas",      // The default font
  "codefont.fontSizePresets": [12, 13, 14, 15, 16, 17, 18, 19, 20],  // Preset font sizes
  "codefont.useFontFallback": true         // Enable fallback fonts for better compatibility
}
```

### ⚠️ Font Fallback Mode Explained

- **Fallback Mode (Recommended)**: `"codefont.useFontFallback": true`
  - Font Configuration: `"JetBrains Mono", Consolas, Monaco, "Courier New", monospace`
  - **Advantage**: If the primary font is unavailable, the editor will use monospaced fallbacks to ensure proper code alignment.
  - **Ideal for**: Team development, cross-platform projects, or any environment where font availability is uncertain.

- **Pure Font Mode**: `"codefont.useFontFallback": false`  
  - Font Configuration: `"JetBrains Mono"` (primary font only)
  - **Advantage**: Ensures a completely consistent font experience with a simpler configuration.
  - **Risk**: If the primary font is unavailable, the editor may fall back to a non-monospaced font, which can break code alignment.
  - **Ideal for**: Personal use when you are certain the specified font is always available.

## 📋 Command List

| Command | Description |
|---|---|
| `CodeFont: Select Font` | Opens the font selector |
| `CodeFont: Toggle Font Size` | Switches the font size |
| `CodeFont: Preview Font` | Previews font effects |
| `CodeFont: Refresh Fonts` | Refreshes the list of available fonts |
| `CodeFont: Reset to Default` | Resets to the default font settings |

## 📖 More Information

- 📖 [Usage Guide](./USAGE_GUIDE.md) - Complete feature descriptions and usage tips.
- 🎛️ [Visual Panel Guide](./VISUAL_PANEL_GUIDE.md) - Detailed instructions for the Font Explorer panel.
- 🔧 [Technical Design](./TECHNICAL_DESIGN.md) - Architecture, development setup, and contribution guide.
- 🚀 [Build and Publish Guide](./BUILD_AND_PUBLISH_GUIDE.md) - The process for building, testing, and publishing.

## 📄 License

MIT License

## 🔗 Links

- [CodeFont Website](https://codefont.dev)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=codefont.codefont)
- [Report an Issue](https://github.com/maxlee/code-font-vscode/issues)

---

**Enjoy a better programming font experience!** 🎉
