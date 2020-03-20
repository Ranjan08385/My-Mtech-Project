import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainPage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eef0ed',
  },
  container: {
    width: '80%',
    height: '85%',
    position: 'absolute',
    // borderWidth: 1,
    marginTop: '7%',
    marginLeft: '20%',
  },
  searchPanel: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    // borderWidth: 1,
    paddingLeft: '20%',
    paddingRight: '10%',
  },
  inputField: {
    width: '70%',
    alignItems: 'center',
    marginRight: 10,
  },
  searchBtn: {
    width: '20%',
    alignItems: 'center',
    marginLeft: 10,
  },
  textInputStyle: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    shadowColor: '#a8a8a8',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  searchBtnStyle: {
    width: '100%',
    backgroundColor: '#458757',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#a8a8a8',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: 'bold',
  }

})