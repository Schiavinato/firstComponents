import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'red'
    },

    headerComp:{
      height: 60,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignContent: 'center',
    },

    bodyComp:{
      flex: 1,
    },

    footerComp:{
      height: 60,
      backgroundColor: 'black',
    }
  });