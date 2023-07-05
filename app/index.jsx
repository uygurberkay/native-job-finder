import {
  View , Text , ScrollView, SafeAreaView, Platform, 
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import {useState} from 'react'
import {
  COLORS, icons, images, SIZES,
} from '../constants'
import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, 
} from '../components'

export default function Home() {
  const router = useRouter()
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === 'ios' ? COLORS.lightWhite : COLORS.lightWhite, }}>
        <Stack.Screen 
            options={{ 
              headerStyle: {backgroundColor: COLORS.orange},
              headerTitle: "MY Job Finder",
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.profile} dimension="60%" />
              ),
              }}  
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flex:1,
                  padding: SIZES.medium,
                }}
              >
              <Welcome username={'Berkay'}

              />
              <Popularjobs jobTitle={'React Developer'} />
              <Nearbyjobs />
              </View>
            </ScrollView>
          <Link href="/details">Go to Details</Link>
          <Link href="/menu">Go to Menu</Link>
    </SafeAreaView>
  );
}