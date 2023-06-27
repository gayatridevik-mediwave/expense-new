/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MonenyDetails from '../../UserData/userdata';
import {Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Innercard() {
  return (
    <View>
      <View>
        <FlatList
          data={MonenyDetails}
          renderItem={({item}) => {
            return (
              <>
                <View style={{}}>
                  {item.categoryAmount.map(v => (
                    <>
                      <View style={styles.innercard}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: 48,
                              height: 48,
                              backgroundColor: 'green',
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Icon
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              name={v.catIcon}
                              size={35}
                              color="#fff"
                            />
                          </View>
                          <Text style={{fontSize: 16, marginLeft: 15, color: '#272727'}}>
                            {v.catTitle}
                          </Text>
                        </View>

                        <View>
                          <Text style={{fontSize: 18}}>₹ {v.catAmount}</Text>
                        </View>
                      </View>
                    </>
                  ))}
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innercard: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal: 5,
    borderColor: 'green',
    padding: 15,
  },
});
export default Innercard;
