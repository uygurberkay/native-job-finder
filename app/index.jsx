import { View , Text} from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
            Home Page
        </Text>
        <Stack.Screen 
            options={{ title: "Overview" }} 
                
            />
      <Link href="/details">Go to Details</Link>
      <Link href="/menu">Go to Menu</Link>
    </View>
  );
}