/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Datepicker from '../Datepicker/datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';

function ExpIncome() {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Food'},
    {key: '2', value: 'Travel'},
    {key: '3', value: 'Geocery'},
  ];

  return (
    <View style={styles.cardback}>
      <Datepicker />
      <View>
        <View>
          <Text style={styles.callexpense}>Enter the amount</Text>

          <TextInput
            style={[styles.amountInput, styles.palceholderText]}
            placeholder="Select amount"
          />
          {/* <TouchableOpacity>
            <Icon
              name="arrow-drop-down"
              style={styles.downarrowbtn}
              size={26}
              color="#08979D"
            />
          </TouchableOpacity> */}
        </View>

        <View>
          <Text style={styles.callexpense}>Choose cateogry</Text>
          <View style={styles.selectDropdown}>
            <SelectList
              boxStyles={styles.selectInputdropdown}
              data={data}
              dropdownStyles={styles.dropoutline}
              dropdownTextStyles={styles.dropdowncatstyle}
              setSelected={setSelected}
              placeholder="Select amount"
              fontFamily="Varela-Regular"
              inputStyles={styles.SelectListDrop}
              search={false}
              arrowicon={
                <Icon
                  name="arrow-drop-down"
                  style={styles.downarrow}
                  size={26}
                  color="#08979D"
                />
              }
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.category}>Add new category +</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.callexpense}>Note</Text>
          <TextInput
            textAlignVertical="top"
            style={styles.amountInput}
            numberOfLines={5}
            multiline={true}
            placeholder="Add your notes here..."
          />
        </View>
        <TouchableOpacity style={styles.btnback}>
          <Text style={styles.addincomebtn}>Add income</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: '#4D4D4D',
    fontSize: 18,
  },
  amountInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    paddingHorizontal: 15,
    position: 'relative',
    color: '#0000005e',
    fontSize: 16,
    flexDirection: 'column',
  },
  category: {
    color: '#08979D',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 15,
  },
  downarrow: {
    position: 'absolute',
    right: 15,
    bottom: 10,
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
  downarrowbtn: {
    position: 'absolute',
    left: 30,
    bottom: 10,
  },
  palceholderText: {
    paddingHorizontal: 60,
  },
  selectDropdown: {
    marginTop: 20,
  },
  SelectListDrop: {
    fontSize: 18,
    fontFamily: 'Varela-Regular',
    backgroundColor: '#fff',
  },
  dropdowncatstyle: {
    fontSize: 20,
    fontFamily: 'Varela-Regular',
  },
  dropoutline: {
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    borderWidth: 0,
  },
  selectInputdropdown: {
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 0,
  },
});

export default ExpIncome;
