import { Image } from 'react-native';
import { styles } from '../styles/styleSheet';


export default function LoginImage() {
  return (
    <Image
    style={styles.cavalo}
    source={require('../assets/images/Cavalo.jpeg')}
    />

  );
}

