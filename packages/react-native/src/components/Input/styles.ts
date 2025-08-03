import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: colors.gray[700],
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    gap: 10,
  },
});
