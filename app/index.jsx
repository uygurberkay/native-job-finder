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
              headerStyle: { backgroundColor: COLORS.lime },
              headerTitle: "",
              headerTintColor: COLORS.darkblue,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
              ),
              headerTitle: "",
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
              <Nearbyjobs jobTitle={'React Developer'}/>
              </View>
            </ScrollView>
    </SafeAreaView>
  );
}