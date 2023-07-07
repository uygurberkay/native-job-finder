import {
  useState 
} from 'react'
import { 
  useRouter, 
} from 'expo-router'
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native'
import {
  COLORS, SIZES, 
} from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch.js'
import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Nearbyjobs = ({jobTitle}) => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch("search", {
    query: `${jobTitle}`,
    // query: 'React Developer at İzmir',
    num_pages: "1",
  });
  const [selectedJob, setSelectedJob] = useState();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Nearby Jobs
        </Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.lime} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
      
    </View>
  )
}

export default Nearbyjobs