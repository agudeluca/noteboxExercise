import {StyleSheet} from 'react-native';

import {colors} from '@/styles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 120,
  },
  container: {
    flex: 1,
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
  footerButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '95%',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    zIndex: 1,
  },
  footerText: {
    fontSize: 18,
    color: colors.white,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: colors.blue,
    marginTop: 20,
    marginBottom: 10,
  },
  disabledFooterButton: {
    backgroundColor: colors.gray190,
  }
});

export default styles;
