import { Image, StyleSheet, View } from "react-native";

const Login = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={require('../../../assets/images/login.png')} style={styles.loginImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: '#000'
  }
})

export default Login;