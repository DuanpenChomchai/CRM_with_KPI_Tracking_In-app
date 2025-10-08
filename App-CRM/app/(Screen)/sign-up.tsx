import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
// import { Link } from "expo-router";

const InputWithIcon = ({
  icon,
  placeholder,
  secure,
  value,
  onChangeText,
}: {
  icon: React.ReactNode;
  placeholder: string;
  secure?: boolean;
  value: string;
  onChangeText: (t: string) => void;
}) => {
  return (
    <View className="w-full rounded-2xl bg-white/90 shadow-md border border-[#E9ECEF]">
      <View className="flex-row items-center px-3">
        <View className="mr-2 opacity-70">{icon}</View>
        <TextInput
          className="flex-1 py-3.5 text-base text-[#1F2937]"
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={secure}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    // TODO: call API signup ที่นี่
    console.log({ name, contact, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F7FAF5]">
      {/* พื้นหลังสีน้ำเขียวอ่อน ๆ แบบภาพตัวอย่าง */}
      <View className="absolute inset-0">
        <View className="absolute -bottom-10 -left-20 h-64 w-64 rounded-full bg-[#DDF0E2]" />
        <View className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#E7F6EC]" />
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center px-6 pt-8">
            <Text className="text-3xl font-semibold text-[#111827] mb-8">
              Sign Up
            </Text>

            <View className="w-full gap-4">
              <InputWithIcon
                icon={<Feather name="user" size={20} />}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />

              <InputWithIcon
                icon={<Feather name="mail" size={20} />}
                placeholder="Phone or email"
                value={contact}
                onChangeText={setContact}
              />

              <InputWithIcon
                icon={<Ionicons name="lock-closed-outline" size={20} />}
                placeholder="Password"
                secure
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity
              onPress={onSignUp}
              className="mt-6 w-full items-center justify-center rounded-xl bg-[#2F5D46] py-3.5 shadow"
              activeOpacity={0.8}
            >
              <Text className="text-white text-base font-semibold">Sign Up</Text>
            </TouchableOpacity>

            <View className="mt-8 flex-row items-center">
              <Text className="text-[#6B7280]">Already have an account? </Text>
              {/* ถ้าใช้ Expo Router ให้ใช้ <Link> แทน TouchableOpacity */}
              {/* <Link href="/(auth)/login" className="text-[#2F5D46] font-semibold">Log In</Link> */}
              <TouchableOpacity onPress={() => { /* navigate to login */ }}>
                <Text className="text-[#2F5D46] font-semibold">Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
