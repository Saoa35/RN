import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet} from 'react-native';

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Contact: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.buttons}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
});

export {Contact};
