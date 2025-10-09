import { Link } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-gradient-to-br from-blue-500 to-purple-600 pt-16 pb-12 px-6">
        <Text className="text-4xl font-bold text-white mb-2">
          Welcome! 👋
        </Text>
        <Text className="text-lg text-blue-100">
          ทดสอบ NativeWind กับ React Native
        </Text>
      </View>

      {/* Content Section */}
      <View className="px-6 py-8">
        
        {/* Card 1: Features */}
        <View className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
          <View className="flex-row items-center mb-4">
            <View className="bg-blue-100 rounded-full p-3 mr-3">
              <Text className="text-2xl">🚀</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Features
            </Text>
          </View>
          <Text className="text-base text-gray-600 leading-6 mb-3">
            โปรเจคนี้ใช้ <Text className="font-semibold text-blue-600">Expo Router</Text> สำหรับ navigation และ <Text className="font-semibold text-purple-600">NativeWind</Text> สำหรับ styling
          </Text>
          <View className="bg-blue-50 rounded-lg p-4">
            <Text className="text-sm text-blue-700">
              ✨ Tailwind CSS classes ใช้งานง่าย
            </Text>
            <Text className="text-sm text-blue-700 mt-1">
              ⚡ Hot reload รวดเร็ว
            </Text>
            <Text className="text-sm text-blue-700 mt-1">
              📱 รองรับทุกแพลตฟอร์ม
            </Text>
          </View>
        </View>

        {/* Card 2: Quick Actions */}
        <View className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
          <View className="flex-row items-center mb-4">
            <View className="bg-green-100 rounded-full p-3 mr-3">
              <Text className="text-2xl">⚡</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Quick Actions
            </Text>
          </View>
          
          <TouchableOpacity className="bg-blue-500 rounded-xl p-4 mb-3 active:bg-blue-600">
            <Text className="text-white text-center font-semibold text-base">
              🎨 View Components
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-500 rounded-xl p-4 mb-3 active:bg-green-600">
            <Text className="text-white text-center font-semibold text-base">
              📊 View Data
            </Text>
          </TouchableOpacity>

          <Link href="/test-nativewind" asChild>
            <TouchableOpacity className="bg-purple-500 rounded-xl p-4 active:bg-purple-600">
              <Text className="text-white text-center font-semibold text-base">
                🧪 Test NativeWind
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Card 3: Status Badges */}
        <View className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
          <View className="flex-row items-center mb-4">
            <View className="bg-yellow-100 rounded-full p-3 mr-3">
              <Text className="text-2xl">🏷️</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Status
            </Text>
          </View>
          
          <View className="flex-row flex-wrap gap-2">
            <View className="bg-green-100 px-4 py-2 rounded-full">
              <Text className="text-green-800 font-medium">✅ Active</Text>
            </View>
            <View className="bg-blue-100 px-4 py-2 rounded-full">
              <Text className="text-blue-800 font-medium">🔄 Syncing</Text>
            </View>
            <View className="bg-purple-100 px-4 py-2 rounded-full">
              <Text className="text-purple-800 font-medium">🎨 Styled</Text>
            </View>
            <View className="bg-orange-100 px-4 py-2 rounded-full">
              <Text className="text-orange-800 font-medium">⚡ Fast</Text>
            </View>
          </View>
        </View>

        {/* Card 4: Grid Example */}
        <View className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
          <View className="flex-row items-center mb-4">
            <View className="bg-pink-100 rounded-full p-3 mr-3">
              <Text className="text-2xl">📊</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">
              Grid Layout
            </Text>
          </View>
          
          <View className="flex-row flex-wrap -mx-2">
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-6 items-center">
                <Text className="text-3xl mb-2">📱</Text>
                <Text className="text-white font-semibold">Mobile</Text>
              </View>
            </View>
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 items-center">
                <Text className="text-3xl mb-2">💻</Text>
                <Text className="text-white font-semibold">Web</Text>
              </View>
            </View>
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 items-center">
                <Text className="text-3xl mb-2">🎨</Text>
                <Text className="text-white font-semibold">Design</Text>
              </View>
            </View>
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-6 items-center">
                <Text className="text-3xl mb-2">⚡</Text>
                <Text className="text-white font-semibold">Speed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Info Footer */}
        <View className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
          <Text className="text-center text-blue-800 font-medium mb-2">
            💡 ทดลองแก้ไขไฟล์นี้แล้วดูการเปลี่ยนแปลง
          </Text>
          <Text className="text-center text-blue-600 text-sm">
            NativeWind v2 + Expo + React Native
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}
