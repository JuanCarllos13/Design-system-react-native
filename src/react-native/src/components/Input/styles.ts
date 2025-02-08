import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
  },
  containerInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.gray[100],
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color: colors.gray[100],
    width: '100%',
    paddingLeft: 4,
  },
  text: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: 'bold',
  },
});
