import { View, Text } from "react-native";
import { useRouter } from "expo-router";

const Menu = () => {
  const router = useRouter();
  return (
    <View>
      <Text
        onPress={() => {
          router.back();
        }}
      >
        Menu Screen
      </Text>
    </View>
  );
}

export default Menu