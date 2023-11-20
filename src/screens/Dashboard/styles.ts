import {StyleSheet} from 'react-native';

import {colors, layouts} from '@/styles';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  item: {
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: colors.gray245,
    margin: 5,
    padding: 15,
  },
  title: {
    fontSize: 15,
    maxWidth: '70%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: colors.gray245,
    marginHorizontal: 5,
  },
  text: {
    margin: 2,
  },
  body: {
    marginTop: 10,
  },
  removeText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 11,
  },
  removeButton: {
    backgroundColor: colors.blue,
    color: colors.white,
    borderRadius: 5,
    height: 24,
    textAlign: 'center',
    alignContent: 'center',
    padding: 5,
    width: 70,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.gray190,
  },
  filters: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 70,
  },
  container: {
    ...layouts.container,
    ...layouts.centered,
    margin: 0,
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginTop: 120,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
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
  }
});

export default styles;
