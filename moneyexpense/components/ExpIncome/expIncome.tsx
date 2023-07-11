/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';
import AddCategory from '../AddCategory/addcategory';
import {Calendar} from 'react-native-calendars';
import LeftIcon from 'react-native-vector-icons/MaterialIcons';
import Calendardate from '../../assets/dateyear';
function ExpIncome() {
  const Category = [
    {key: '1', value: 'Food', image: require('../../assets/food.png')},
    {key: '2', value: 'Travel', image: require('../../assets/travel.png')},
    {key: '3', value: 'Geocery', image: require('../../assets/cart.png')},
  ];
  const [showcat, Setshowcat] = useState(false);
  const [selected, setSelected] = useState('');
  const [showcalendar, setShowcalendar] = useState(false);
  const handleclick = () => {
    setShowcalendar(!showcalendar);
  };
  return (
    <View style={styles.cardback}>
      <View style={styles.monthyear}>
        <View style={styles.monthimage}>
          <LeftIcon name="keyboard-arrow-left" size={30} color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontSize: 23,
            }}>
            June 2023
          </Text>
          <Icon name="keyboard-arrow-right" size={30} color="#fff" />
        </View>
        <View style={{position: 'relative'}}>
          <TouchableOpacity style={styles.outerCalendar} onPress={handleclick}>
            <View style={styles.calborder} />

            <Calendardate style={styles.calendar} />
          </TouchableOpacity>
        </View>
      </View>

      {showcalendar && (
        <Calendar
          style={styles.calIconstyle}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e',
          }}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true},
          }}
        />
      )}

      <View>
        <View>
          <Text style={styles.callexpense}>Enter the amount</Text>
          <TextInput
            style={[styles.amountInput, styles.palceholderText]}
            placeholder="Enter the amount"
          />
        </View>
        <View>
          <Text style={styles.callexpense}>Choose cateogry</Text>
          <View style={styles.selectDropdown}>
            <SelectDropdown
              data={Category}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.dropdownBtnStyle}
              renderCustomizedButtonChild={selectedItem => {
                return (
                  <View style={styles.dropdownBtnChildStyle}>
                    {selectedItem ? (
                      <Image
                        source={selectedItem.image}
                        style={styles.dropdownBtnImage}
                      />
                    ) : null}
                    <Text style={styles.dropdownBtnTxt}>
                      {selectedItem ? selectedItem.value : 'Select category'}
                    </Text>
                    <Icon
                      name="arrow-drop-down"
                      style={styles.downarrow}
                      size={26}
                      color="#08979D"
                    />
                  </View>
                );
              }}
              dropdownStyle={styles.dropdownDropdownStyle}
              renderCustomizedRowChild={item => {
                return (
                  <View style={styles.dropdownRowChildStyle}>
                    <Image
                      source={item.image}
                      style={styles.dropdownRowImage}
                    />
                    <Text style={styles.dropdownRowTxt}>{item.value}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => Setshowcat(true)}>
            <Text style={styles.category}>Add new category +</Text>
          </TouchableOpacity>

          <AddCategory
            isVisible={showcat}
            handleClose={() => {
              Setshowcat(false);
            }}
          />
        </View>
        <View>
          <Text style={styles.callexpense}>Note</Text>
          <TextInput
            textAlignVertical="top"
            style={[styles.amountInput, styles.palceholderText]}
            numberOfLines={5}
            multiline={true}
            placeholder="Add your notes here..."
          />
        </View>
        <View>
          <TouchableOpacity style={styles.btnback}>
            <Text style={styles.addincomebtn}>Add income</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownBtnStyle: {
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 0,
    borderRadius: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    flex: 1,
  },
  dropdownBtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dropdownBtnImage: {
    width: 30,
    height: 30,
  },
  dropdownBtnTxt: {
    color: '#0000005e',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 20,
  },
  dropdownDropdownStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
  },
  dropdownRowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },
  dropdownRowTxt: {
    color: '#0000005e',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 20,
  },
  cardback: {
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 40,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  callexpense: {
    marginTop: 20,
    fontSize: 18,
    position: 'relative',
  },
  amountInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    position: 'relative',
    fontSize: 16,
    flexDirection: 'column',
  },
  category: {
    color: '#08979D',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 15,
  },
  btnback: {
    marginTop: 40,
    backgroundColor: '#08979D',
    padding: 15,
    borderRadius: 40,
  },
  addincomebtn: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  palceholderText: {
    paddingHorizontal: 20,
    fontFamily: 'Varela-Regular',
    fontSize: 18,
  },
  selectDropdown: {
    marginTop: 20,
  },
  downarrow: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
  monthimage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  calborder: {
    borderWidth: 3,
    borderRadius: 25,
    width: 40,
    height: 40,
    backgroundColor: '#08979D',
    borderColor: '#fff',
  },
  calendar: {
    position: 'absolute',
    width: 18,
    height: 18,
    top: 10,
    right: 12,
  },
  monthyear: {
    position: 'relative',
    // marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outerCalendar: {
    position: 'relative',
    zIndex: 1,
  },
  calIconstyle: {
    maxWidth: '90%',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ExpIncome;
