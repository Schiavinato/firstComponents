import { StyleSheet, Text, View } from 'react-native';
import SecondComponent from './src/components/SecondComponent';
import { styles } from './src/styles/StylesSheet';
import ThirdComponent from './src/components/ThirdComponent';
import FourComponent from './src/components/FourComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourComponent />
    </View>
  );
}

function FirstComponent() {
  return (
    <View>
      <Text>Primeiro componente</Text>
    </View>
  );
}

