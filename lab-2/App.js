//BSCS 3 - 4
//Ecot, Katrina Jane
//Bito-on, Prince Carl
//Magat, Carlos

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
  Image,
  Linking
} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [items, setItems] = useState([]);

  const itemInputHandler = (enteredItem) => {
    setEnteredItem(enteredItem);
  };

  const addItemHandler = () => {
    console.log(enteredItem);
    if (enteredItem == '' | enteredItem == ' '){
      console.log("Alert");
      alert('Field cannot be blank.');
    } else {
      setItems(currentItems => [...currentItems, enteredItem]);
      setEnteredItem('');
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
          <Image source={{uri: 'https://i.imgur.com/ujmv1Y4.png'}}style={styles.jif} />
       </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Item"
          style={styles.userInput}
          onChangeText={itemInputHandler}
          value={enteredItem}
        />
        <Button title="ADD" color="#5F7DAF" onPress={addItemHandler} />
      </View>
      <ScrollView>
        { items.map((item) => (
          <View key={item} style={styles.itemlist}>
            <Text style={styles.moreItems} key={item}>{item}</Text>
          </View>
        )) }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#E2C3C8',
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontSize: 10
  },
  jif: {
    width: 250,
    height: 300,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInput: {
    borderColor: '#5F7DAF',
    borderWidth: 1,
    padding: 10,
    width: '75%',
    fontFamily: 'Century Gothic',
  },
  itemlist: {
    padding: 10,
    marginTop: 5,
    textAlign:'justify',
    borderColor: '#5F7DAF',
    borderWidth: 1,
  },
  moreItems: {
    fontFamily: 'Century Gothic',
    color: '#4C5B64'
  },
 
});