/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import ProfileData from '../../UserData/profileData';

function Collapisble() {
  const Image = require('../../assets/next.png');
  return (
    <View style={styles.cardback}>
      <Pressable style={styles.innercard}>
        <View style={styles.innercrdbtn}>
          <View style={styles.alignDesign}>
            <View>
              <View style={styles.circleDesign}>
                <Text
                  style={{
                    fontSize: 24,
                    color: '#fff',
                  }}>
                  A
                </Text>
              </View>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.TextDesign}>alandonald27</Text>
              <Text>alandonald27@gmail.com</Text>
            </View>
          </View>
          <View>
            <ImageBackground style={{width: 11, height: 15}} source={Image} />
          </View>
        </View>
      </Pressable>

      <View>
        {ProfileData.map(item => {
          return (
            <>
              <Text style={[styles.TextDesign, {marginBottom: 10}]}>
                {item.title}
              </Text>
              <View style={styles.cardTitle}>
                {item?.detailsAccount.map((category, index) => {
                  return (
                    <View key={index}>
                      <View
                        style={[
                          styles.innercrdbtn,
                          {
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                          },
                          index === item.detailsAccount.length - 1
                            ? {borderBottomWidth: 0}
                            : null,
                        ]}>
                        <View>
                          <Text style={styles.TextDesign}>
                            {category.innerTitle}
                          </Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                          <ImageBackground
                            style={{width: 11, height: 15}}
                            source={Image}
                          />
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circleDesign: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#0096C7',
    borderWidth: 3,
    borderColor: '#90E0EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardback: {
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 40,
    borderRadius: 20,
    padding: 20,
    shadowOffset: {width: 3, height: 2},
    elevation: 2,
  },
  cardTitle: {
    backgroundColor: '#fff',
    // marginTop: 15,
    marginBottom: 10,
    borderRadius: 20,
    // padding: 20,
    shadowOffset: {width: 3, height: 2},
    elevation: 2,
    maxheight: '100%',
  },
  innercard: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginBottom: 20,
    borderRadius: 15,
    shadowOffset: {width: 3, height: 2},
    elevation: 2,
    padding: 15,
  },
  // outerText: {
  //   width: '100%',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // },
  innercrdbtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextDesign: {
    fontSize: 18,
    color: '#000',
  },
  alignDesign: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export default Collapisble;
