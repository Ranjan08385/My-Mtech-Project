import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    height: '100%',
    // backgroundColor: 'red',
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
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginImage: {
    width: '100%',
    height: '110%',
  },
  loginLogo: {
    width: 100,
    height: 100,  
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  loginText: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 150,
  },
  loginTextStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeText: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 210,
  },
  welcomeTextStyle: {
    fontSize: 24,
    color: '#fff',
  },
  signInText: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 250,
  },
  signInTextStyle: {
    fontSize: 16,
    color: '#fff',
  },
})