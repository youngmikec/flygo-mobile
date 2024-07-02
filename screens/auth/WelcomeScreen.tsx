import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from '../../constants/Colors';
import AppButton from '../../components/AppButton';

export const WelcomeScreen = ({ navigation }: { navigation: any}) => {
  const goTo = (path: string) => {
    navigation.navigate(path);
  }

  return (
    <ImageBackground source={require('../../assets/images/flygo-welcome-bg.png')} style={styles.container}>

      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Welcome to Flygo!</Text>
        <Text style={styles.subText}>Your gateway to easy travel bookings.</Text>

        <View style={styles.btnWrapper}>
          <AppButton
            btnText={'Get Started'}
            width={'90%'}
            textColor={Colors.white}
            bgColor={Colors.primary}
            onPress={() => goTo('Signup')}
          />

          <AppButton
            btnText={'Sign In'}
            width={'90%'}
            textColor={Colors.white}
            bgColor={Colors.primary}
            onPress={() => goTo('Signin')}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  wrapper: {
    flex: 0.4,
    width: '100%',
    backgroundColor: Colors.black,
    opacity: 0.9,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
    opacity: 1,
    textAlign: 'left',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
    opacity: 1,
    textAlign: 'left',
    marginBottom: 5,
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  }
})

export default WelcomeScreen;