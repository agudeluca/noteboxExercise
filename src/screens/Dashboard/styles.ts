import {StyleSheet} from 'react-native';

import {colors, layouts} from '@/styles';

const styles = StyleSheet.create({
  list: {
    ...layouts.container,
    width: '100%',
  },
  containerImage: {
    ...layouts.container,
    backgroundColor: colors.white,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray190,
  },
  image: {
    width: 200,
    height: 200,
  },
  containerScreen: {
    ...layouts.container,
    backgroundColor: colors.white,
  },

  checksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
  item: {
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: colors.gray245,
    margin: 5,
    padding: 15,
  },
  titleContainer: {
    ...layouts.horizontalContainer,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    maxWidth: '70%',
  },
  header: {
    ...layouts.horizontalContainer,
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
  container: {
    ...layouts.container,
    ...layouts.centered,
    margin: 0,
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginTop: 120,
  },
});

export default styles;
