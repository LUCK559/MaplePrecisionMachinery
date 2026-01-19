# 项目设置说明

## 前提条件

在开始之前，请确保已安装 **Node.js**（包含 npm）。

### 检查是否已安装 Node.js

在 PowerShell 或命令提示符中运行：
```powershell
node --version
npm --version
```

如果显示"无法识别"错误，请先安装 Node.js：
- 访问 https://nodejs.org/ 下载 LTS 版本
- 运行安装程序（确保勾选 "Add to PATH"）
- 安装完成后**重启终端**

详细安装说明请参考：`安装Node.js指南.md`

## 初始设置步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 设置图片资源

由于产品图片位于项目根目录的 `Product image/` 文件夹中，您需要将其复制到 `public/` 目录：

**Windows:**
```powershell
xcopy "Product image" "public\Product image\" /E /I
```

**Mac/Linux:**
```bash
cp -r "Product image" "public/"
```

或者手动将 `Product image` 文件夹复制到 `public/` 目录下。

### 3. 启动开发服务器

```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动。

## 项目结构说明

- `src/` - 源代码目录
- `public/` - 静态资源目录（包含 Product image 文件夹）
- `Product image/` - 原始产品图片文件夹（需要复制到 public/）

## 图片路径说明

所有图片路径在代码中使用 `/Product image/...` 格式，这对应于 `public/Product image/...` 目录。

## 开发注意事项

1. 确保所有产品图片都在 `public/Product image/` 目录下
2. 图片文件名中的空格和特殊字符会被正确处理
3. 支持 .jpg, .JPG, .png 等格式
