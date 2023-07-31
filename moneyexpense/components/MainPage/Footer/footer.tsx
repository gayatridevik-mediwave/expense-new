import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

interface FooterProps {
  onPressAddbtn?: () => any;
  handleStatistics?: () => any;
  onHomebtn?: () => any;
  ontest?: () => any;
  navigateProfile?: () => any;
}

const Footer: React.FC<FooterProps> = ({
  onHomebtn,
  onPressAddbtn,
  handleStatistics,
  ontest,
  navigateProfile,
}) => {
  return (
    <View style={styles.background}>
      <View>
        <View style={{}}>
          <View style={styles.footeralign}>
            <TouchableOpacity onPress={onHomebtn}>
              <Image source={require('../../../assets/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleStatistics}>
              <Image source={require('../../../assets/stack.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressAddbtn}>
            <ImageBackground
              style={styles.imageback}
              source={require('../../../assets/circleback.png')}>
                <Image
                  style={styles.addalign}
                  source={require('../../../assets/add.png')}
                />
            </ImageBackground>
              </TouchableOpacity>

            <TouchableOpacity onPress={ontest}>
              <Image source={require('../../../assets/money.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateProfile}>
              <Image source={require('../../../assets/setting.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 80,
    bottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    shadowColor: '#000',
  },
  footeralign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  addalign: {
    position: 'absolute',
    zIndex: 2,
    width: 23,
    height: 23,
    top: 35,
    right: 34,
  },
  imageback: {
    position: 'relative',
    width: 88,
    height: 88,
    marginBottom: 60,
  },
});

export default Footer;
