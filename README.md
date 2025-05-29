<h1 align="center">Capacitor Printer Plugin</h1><br>
<p align="center"><strong><code>@jnhtr/capacitor-plugin-printer</code></strong></p>
<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2025?style=for-the-badge" />
  <a href="https://www.npmjs.com/package/@jnhtr/capacitor-plugin-printer"><img src="https://img.shields.io/npm/dw/@jnhtr/capacitor-plugin-printer?style=for-the-badge" /></a>
</p>
<p align="center">
Capacitor plugin for printing HTML, plain text, and images in iOS/Android apps. Supports additional features like Base64 PDF and image printing (from v0.0.5).
</p>
<p align="center">
<img width="175px" height="350px" src="https://github.com/user-attachments/assets/5b638aba-d4ab-43ab-8fbf-a726335ef075">
<img width="400px" height="350px" src="https://github.com/BarisCanYesil/capacitor-plugin-printer/assets/17790689/818ea860-f3ba-4d8f-b08a-4df19ec57a43">
</p>

```typescript
Printer.print({ content: '<b>Lorem ipsum...</b>'})
```

### Versions
| Capacitor Version | Plugin Version |
| ----------------- | -------------- |
| v5.x              | v0.0.3         |
| v6.x              | v0.0.4+        |
| v7.x              | v1.0.0+        |

### Supported Platforms

- Android 6.0+ (API 24+)
- iOS 14.0+

### Supported Contents

- HTML (can use CSS inline styling)
- Text
- Image(as HTML)
- Base64(PDF & image) (since v0.0.5)

## Installation
```bash
npm install @jnhtr/capacitor-plugin-printer
npx cap sync
```

## Usage
 ```typescript
import { Printer } from '@jnhtr/capacitor-plugin-printer';

.
.
.

 Printer.print({ content: 'Lorem ipsum...', name: 'lorem-filename', orientation: 'landscape' })
```

## Examples
Text:
```typescript
 Printer.print({ content: 'Lorem ipsum...'})
```

HTML:
```typescript
 Printer.print({ content: '<h1>Lorem</h1>'})
```

Printing multiple HTML elements:
```typescript
    let contentTest: string = "";

    contentTest += '<li style="color:green">Tea</li>'
    contentTest += '<li style="font-size:50px">Coffee</li>'
    contentTest += '<img src="https://picsum.photos/200">'

    Printer.print({ content: contentTest })
```

Images with HTML:
```typescript
 Printer.print({ content: '<img src="base64/url/path">'})
```

with inline CSS:
```typescript
 Printer.print({ content: '<b style="color:red">Lorem ipsum</b>'})
```

Base64:
```typescript
// (since v0.0.5)
// Base64 decoder supports Plain text(just the Base64 value) & Data URI(data:content/type;base64)

 Printer.print({ content: 'base64:...'})
```

## API

<docgen-index>

* [`print(...)`](#print)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### print(...)

```typescript
print(printOptions: PrintOptions) => Promise<void>
```

| Param              | Type                                                  |
| ------------------ | ----------------------------------------------------- |
| **`printOptions`** | <code><a href="#printoptions">PrintOptions</a></code> |

--------------------


### Interfaces


#### PrintOptions

| Prop              | Type                | Description                                                 | Default                                                        | Since |
| ----------------- | ------------------- | ----------------------------------------------------------- | -------------------------------------------------------------- | ----- |
| **`content`**     | <code>string</code> | HTML content for print.                                     |                                                                | 0.0.1 |
| **`name`**        | <code>string</code> | Name of the print of the document.                          | <code>iOS=YourAppName/Android=Document+CurrentTimestamp</code> | 0.0.1 |
| **`orientation`** | <code>string</code> | Orientation of the printing page. "portrait" or "landscape" | <code>"portrait"</code>                                        | 0.0.1 |

</docgen-api>

## Attribution & License

This plugin is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

### Contributors
See [CONTRIBUTORS.md](./CONTRIBUTORS.md) for a full list of contributors.

### Original Author
- **BarisCanYesil** - Original plugin creator and maintainer for Capacitor 5 & 6

### Current Maintainer
- **jnhtr** (@jnhtr) - Capacitor 7 upgrade, platform requirements updates, and build system modernisation

### Acknowledgments
Thanks to BarisCanYesil for creating this excellent printing plugin and maintaining it through multiple Capacitor versions. This fork continues that work with Capacitor 7 compatibility and ongoing maintenance.

## Changelog

### v1.0.0 (Capacitor 7)
- ✅ Upgraded to Capacitor 7 compatibility
- ✅ Updated minimum iOS requirement to 14.0+
- ✅ Updated minimum Android requirement to API 24+ (Android 6.0+)
- ✅ Updated all dependencies and build tools
- ✅ Improved TypeScript configuration
- ✅ Enhanced development tooling

### Previous Versions
See the [original repository](https://github.com/BarisCanYesil/capacitor-plugin-printer) for changelog of versions 0.0.1 - 0.0.5
