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
import DateComp from '../DataCOmp/DateComp';
import {useForm, Controller, Form} from 'react-hook-form';

interface ExpIncomeProps {
  isExpense?: any;
}

const ExpIncome: React.FC<ExpIncomeProps> = ({isExpense}) => {
  const Category = [
    {key: '1', value: 'Food', image: require('../../assets/food.png')},
    {key: '2', value: 'Travel', image: require('../../assets/travel.png')},
    {key: '3', value: 'Geocery', image: require('../../assets/cart.png')},
  ];
  const [showcat, Setshowcat] = useState(false);
  const [calendarShow, setcalendarShow] = useState(false);

  const onDateIconClick = () => {
    setcalendarShow(!calendarShow);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      category: '',
      note: '',
    },
  });
  const onSubmit = data => console.log(data);
  return (
    <View style={styles.cardback}>
      <View style={{}}>
        <DateComp
          onDateIconClick={onDateIconClick}
          show={calendarShow}
          val={{color: '#4D4D4D'}}
          month="23nd Jun 2023"
        />
      </View>
      <View>
        <View>
          <Text style={styles.callexpense}>Enter the amount</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.amountInput, styles.palceholderText]}
                placeholder="Enter the amount"
              />
            )}
            name="firstName"
          />
          {errors.firstName && (
            <Text style={styles.errormessage}>Firstname is required.</Text>
          )}
        </View>
        <View>
          <Text style={styles.callexpense}>Choose cateogry</Text>

          <View style={styles.selectDropdown}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur}}) => (
                <SelectDropdown
                  onBlur={onBlur}
                  data={Category}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    onChange(selectedItem);
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
                          {selectedItem
                            ? selectedItem.value
                            : 'Select category'}
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
              )}
              name="category"
            />
            {errors.category && (
              <Text style={styles.errormessage}>Category is required.</Text>
            )}
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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                textAlignVertical="top"
                style={[styles.amountInput, styles.palceholderText]}
                numberOfLines={5}
                multiline={true}
                placeholder="Add your notes here..."
              />
            )}
            name="note"
          />
          {errors.note && (
            <Text style={styles.errormessage}>Note is required.</Text>
          )}
        </View>
        {isExpense ? (
          <View>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.btnback}>
              <Text style={styles.addincomebtn}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.btnback}>
              <Text style={styles.addincomebtn}>Add Income</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

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
  errormessage: {
    marginTop: 5,
    color: '#C1121F',
  },
});

export default ExpIncome;
