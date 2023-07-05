import { 
  View, 
  Text, 
  TouchableOpacity,  
  Image,
} from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      styles={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        styles={styles.logoContainer(selectedJob,item)}
      >
        <Image 
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text>
        Test
      </Text>
    </TouchableOpacity>
  )
}
export default PopularJobCard