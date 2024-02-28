import { StyleSheet, Text, View } from 'react-native';
import SecondComponent from './src/components/SecondComponent';
import { styles }  from './src/styles/estilos';
import ThirdComponent from './src/components/ThirdComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </View>
  );
}

function FirstComponent() {
  return (
    <View style={styles.headerComp}>
      <Text>Primeiro componente</Text>
    </View>
  );
}

