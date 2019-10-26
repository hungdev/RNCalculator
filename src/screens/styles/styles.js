import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 90,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  textDivision: {
    fontSize: 45,
    fontWeight: '300',
  },
  textMulti: {
    fontSize: 35,
    fontWeight: '300',
  },
});
