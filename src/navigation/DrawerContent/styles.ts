import {StyleSheet} from 'react-native';

import { colors } from '@/styles';

const styles = StyleSheet.create({
  drawerContainer: {
    marginLeft: 5,
    marginRight: 10,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
    color: colors.white,
  },
  drawerLabelContainer: {
    paddingLeft: 10,
    width: '100%',
  },
  drawerLabelContainerActive: {
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: colors.white,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 30,
  },
  labelText: {
    fontSize: 20,
    width: '100%',
    margin: 20,
    textAlign: 'center',
    color: colors.white,
  },
  drawerLblStyleActive: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
    color: colors.black,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray190,
    margin: 10,
    alignContent: 'center',
  },
});

export default styles;
