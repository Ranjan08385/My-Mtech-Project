import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerSec: {
    zIndex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    height: '15%',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  leftImg: {
    width: '50%',
  },
  imgLogo: {
    width: 110,
    height: 100,
    alignSelf: 'left',
    marginLeft: 25
  },
  rightDetails: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 50,
  },
  username: {
    fontSize: 18,
    color: '#818583',
  },
  sideBar: {
    width: '20%',
    height: '85%',
    backgroundColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  profileName: {
    width: '100%',
    flexDirection: 'row',
  },
  profile: {
    backgroundColor: '#458757',
    padding: 10,
    width: '20%',
    height: '65%',
    margin: 20,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortForm: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  completeName: {
    width: '80%'
  },
  nameStyle: {
    color: '#818583',
    marginTop: 35,
    fontSize: 18,
  },
  menuOptions: {
    marginTop: 30,
  },
  imgAndName: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    width: 30,
    height: 30,
  },
  iconImage: {
    width: '20%',
  },
  logoText: {
    width: '80%',
    marginTop: 1,
  },
  logoTextStyle: {
    color: '#818583',
    fontSize: 16,
    
  }
})