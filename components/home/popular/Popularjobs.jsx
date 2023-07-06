import {
  useState 
} from 'react'
import { 
  useRouter, 
} from 'expo-router'
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native'
import styles from './popularjobs.style'
import {
  COLORS, SIZES, 
} from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch.js'

const Popularjobs = ({jobTitle}) => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch("search", {
    query: `${jobTitle}`,
    // query: 'React Developer at İzmir',
    num_pages: "1",
  });
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

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
            data={data}
            renderItem={({item}) => (
              <PopularjobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item?.job_id} 
          // keyExtractor={(item) => String(item)}
          contentContainerStyle={{ columnGap: SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs