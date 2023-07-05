import {
  useState 
} from 'react'
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native'
import {
  COLORS, SIZES, 
} from '../../../constants'
import { 
  useRouter, 
} from 'expo-router'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import useFetch from '../../../hook/useFetch.js'

const Popularjobs = () => {
  const router = useRouter()

  const {data , isLoading, error} = useFetch(
    'search' , {
      query: 'React developer',
      num_pages: 1
    }
  )

  console.log(data)
  // const isLoading =false;
  // const error = false; 
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={COLORS.lime} />
        ) : error ? (
          <Text>
            Something went wrong
          </Text>
        ) : (
          <FlatList 
          data={[1,2,3,4,5,6,7,8]}
          renderItem={({item}) => (
            <PopularjobCard 
              item={item}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium}}
          horizontal

          />
        )}
      </View>

    </View>
  )
}

export default Popularjobs