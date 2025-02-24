# 🎨 @your-org/icons

A delightful collection of React icons for your design system! ✨

## 🚀 Installation

```bash
yarn add @your-org/icons
```

## 🌟 Usage

You can use icons directly:

```tsx
import { CheckIcon } from '@your-org/icons';

function MyComponent() {
  return <CheckIcon className="w-6 h-6" />;
}
```

Or use the IconMap for dynamic icons:

```tsx
import { IconMap, type IconName } from '@your-org/icons';

function DynamicIcon({ name }: { name: IconName }) {
  const Icon = IconMap[name];
  return <Icon className="w-6 h-6" />;
}
```

## 🎨 Customization

Icons inherit their color from the current text color (`currentColor`). You can customize the stroke color using the CSS variable `--icon-stroke`.

## 🛠️ Development

This package is automatically generated from Figma designs. Please do not modify the files directly.

### File Structure

```
src/
├── icons/          # Individual icon components
├── types/          # TypeScript type definitions
├── utils/          # Icon mapping utilities
└── index.ts        # Main exports
```

## 📝 License

MIT © [Your Organization]
