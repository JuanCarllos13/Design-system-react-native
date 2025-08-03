import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
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
    paddingBottom: 5,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'bold',
    marginBottom: 14,
  },
  eye: {
    marginLeft: -50,
  },
});
