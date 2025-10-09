import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function TestNativeWind() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 pt-12">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-gray-900 mb-2">
            NativeWind Test
          </Text>
          <Text className="text-lg text-gray-600">
            ทดสอบการใช้งาน NativeWind กับ Expo
          </Text>
        </View>

        {/* Card Example */}
        <View className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
          <Text className="text-2xl font-semibold text-gray-800 mb-3">
            Card Component
          </Text>
          <Text className="text-base text-gray-600 leading-6">
            นี่คือตัวอย่างการใช้ Tailwind CSS กับ React Native ผ่าน NativeWind
          </Text>
        </View>

        {/* Buttons */}
        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Buttons
          </Text>
          
          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mb-3 active:bg-blue-600">
            <Text className="text-white text-center font-semibold text-base">
              Primary Button
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-500 p-4 rounded-lg mb-3 active:bg-green-600">
            <Text className="text-white text-center font-semibold text-base">
              Success Button
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-500 p-4 rounded-lg mb-3 active:bg-red-600">
            <Text className="text-white text-center font-semibold text-base">
              Danger Button
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="border-2 border-gray-300 p-4 rounded-lg mb-3 active:bg-gray-100">
            <Text className="text-gray-700 text-center font-semibold text-base">
              Outlined Button
            </Text>
          </TouchableOpacity>
        </View>

        {/* Grid Example */}
        <View className="mb-4">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Grid Layout
          </Text>
          <View className="flex-row flex-wrap -mx-2">
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-purple-500 p-6 rounded-lg">
                <Text className="text-white font-semibold text-center">
                  Box 1
                </Text>
              </View>
            </View>
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-pink-500 p-6 rounded-lg">
                <Text className="text-white font-semibold text-center">
                  Box 2
                </Text>
              </View>
            </View>
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-indigo-500 p-6 rounded-lg">
                <Text className="text-white font-semibold text-center">
                  Box 3
                </Text>
              </View>
            </View>
            <View className="w-1/2 px-2 mb-4">
              <View className="bg-yellow-500 p-6 rounded-lg">
                <Text className="text-white font-semibold text-center">
                  Box 4
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Status Badges */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Status Badges
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <View className="bg-green-100 px-4 py-2 rounded-full">
              <Text className="text-green-800 font-medium">Active</Text>
            </View>
            <View className="bg-yellow-100 px-4 py-2 rounded-full">
              <Text className="text-yellow-800 font-medium">Pending</Text>
            </View>
            <View className="bg-red-100 px-4 py-2 rounded-full">
              <Text className="text-red-800 font-medium">Inactive</Text>
            </View>
            <View className="bg-blue-100 px-4 py-2 rounded-full">
              <Text className="text-blue-800 font-medium">Info</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
