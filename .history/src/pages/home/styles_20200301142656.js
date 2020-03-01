import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  imgSection: {
    width: '100%',
    height: '50%',
    backgroundColor: '#458757',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  loginSection: {
    width: '100%'
  },
  unameAndPass: {
    marginTop: 50,
    marginLeft: '35%',
    marginRight: '35%',
  },
  uname: {
    marginBottom: 20,
  },
  password: {
    marginBottom: 20,
  },
  loginBtnStyle: {
    backgroundColor: '#458757',
    marginLeft: '40%',
    marginRight: '40%',
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginImage: {
    width: '100%',
    height: '110%',
  },
  loginLogo: {
    width: 130,
    height: 130,  
  },
  loginText: {
    marginTop: 1,
  },
  loginTextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeText: {
    marginTop: 10,
  },
  welcomeTextStyle: {
    fontSize: 28,
    color: '#fff',
  },
  signInText: {
    marginTop: 20,
  },
  signInTextStyle: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    position: 'absolute',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 30,
  },
  content_LAPTOP: {
    position: 'absolute',
    marginLeft: '35%',
    marginRight: '35%',
    marginTop: 10,
  }
})