import {
  View , Text , ScrollView, SafeAreaView, Platform,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import {useState} from 'react'
import {
  COLORS, icons, SIZES,
} from '../constants'
import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, 
} from '../components'

export default function Home() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === 'ios' ? COLORS.lightWhite : COLORS.lightWhite, }}>
        <Stack.Screen 
            options={{ 
              headerStyle: { backgroundColor: COLORS.lime, justifyContent:  "center" },
              headerTitle: "Job Finder",
              headerTintColor: COLORS.darkblue,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.profile} dimension='100%' />
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
              <Welcome 
                username={'Berkay'}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                  if(searchTerm) {
                    router.push(`/search/${searchTerm}`)
                  }
                }}
              />
              <Popularjobs jobTitle={'React Developer'} />
              <Nearbyjobs jobTitle={'React Developer'}/>
              </View>
            </ScrollView>
    </SafeAreaView>
  );
}