import {StyleSheet} from 'react-native';

import {colors, layouts} from '@/styles';

const styles = StyleSheet.create({
  safeArea: {
    ...layouts.container,
    backgroundColor: colors.white,
    marginTop: 120,
  },
  container: {
    ...layouts.container,
    backgroundColor: colors.white,
  },
  textArea: {
    paddingTop: 10,
    minHeight: 400,
  },
  keyboardAWareScrollView: {
    flexGrow: 1,
  },
  input: {
    fontSize: 16,
    padding: 10,
    height: 40,
    backgroundColor: colors.gray245,
    borderRadius: 5,
    margin: 5,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: colors.blue,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styles;
