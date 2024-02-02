import {StyleSheet} from 'react-native';

import {colors} from '@/styles';

const styles = StyleSheet.create({
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
  disabledFooterButton: {
    backgroundColor: colors.gray190,
  },
  footerText: {
    fontSize: 18,
    margin: 2,
    color: colors.white,
  },
});

export default styles;
