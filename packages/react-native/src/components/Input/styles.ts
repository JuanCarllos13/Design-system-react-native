
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  containerInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.black,
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color: colors.black,
    width: '100%',
    paddingLeft: 4,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'bold',
  },
  eye: {
    marginLeft: -50
  }
});
