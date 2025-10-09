# CE498 CRM - React Native with Expo & NativeWind

โปรเจค React Native ที่ใช้ Expo และ NativeWind (Tailwind CSS สำหรับ React Native)

## 🚀 เริ่มต้นใช้งาน

### ติดตั้ง Dependencies
```bash
npm install
```

### รันโปรเจค

#### รันบน Android
```bash
npm run android
```

#### รันบน iOS (ต้องใช้ macOS)
```bash
npm run ios
```

#### รันบน Web
```bash
npm run web
```

#### รันบน Expo Go
```bash
npx expo start
```

## 📱 ทดสอบ NativeWind

เพื่อดูตัวอย่างการใช้งาน NativeWind:
1. รันโปรเจคด้วยคำสั่งใดคำสั่งหนึ่งด้านบน
2. เปิดไฟล์ `app/test-nativewind.tsx` เพื่อดูตัวอย่างการใช้งาน

## 🎨 NativeWind (Tailwind CSS)

### การใช้งาน
ใช้ `className` เหมือนใน Tailwind CSS ปกติ:

```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-blue-500">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

### คลาสที่ใช้บ่อย
- **Layout**: `flex-1`, `flex-row`, `items-center`, `justify-center`
- **Spacing**: `p-4`, `px-6`, `py-2`, `m-4`, `mx-auto`
- **Colors**: `bg-blue-500`, `text-white`, `border-gray-300`
- **Typography**: `text-lg`, `text-2xl`, `font-bold`, `text-center`
- **Borders**: `rounded-lg`, `rounded-full`, `border-2`

## 📂 โครงสร้างโปรเจค

```
CE498_CRM/
├── app/                      # หน้าและ routing (Expo Router)
│   ├── (tabs)/              # Tab navigation
│   │   ├── index.tsx        # หน้าหลัก
│   │   └── explore.tsx      # หน้า Explore
│   ├── _layout.tsx          # Root layout
│   └── test-nativewind.tsx  # ตัวอย่าง NativeWind
├── assets/                  # รูปภาพและ fonts
├── components/              # React components
├── constants/               # ค่าคงที่
├── hooks/                   # Custom hooks
├── babel.config.js          # Babel config (สำหรับ NativeWind)
├── tailwind.config.js       # Tailwind config
├── global.css              # Global styles
├── nativewind-env.d.ts     # TypeScript types สำหรับ NativeWind
└── package.json            # Dependencies

```

## 🛠 เทคโนโลยีที่ใช้

- **React Native** - Framework สำหรับสร้าง Mobile App
- **Expo** - Platform สำหรับพัฒนา React Native
- **Expo Router** - File-based routing
- **NativeWind** - Tailwind CSS สำหรับ React Native
- **TypeScript** - Type-safe JavaScript

## 📚 เอกสารเพิ่มเติม

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 💡 Tips

1. ใช้ Expo Go app เพื่อทดสอบบนมือถือจริง (ไม่ต้องใช้ simulator)
2. กด `r` ใน terminal เพื่อ reload app
3. กด `m` เพื่อเปิด menu
4. ใช้ VS Code extension "Tailwind CSS IntelliSense" เพื่อ autocomplete

## 🐛 แก้ไขปัญหา

### Cache issues
```bash
npx expo start -c
```

### ติดตั้งใหม่ทั้งหมด
```bash
rm -rf node_modules
npm install
```

---

Happy Coding! 🎉
