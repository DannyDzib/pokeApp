import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const App: React.FC<any> = () => {
  const [count, setCount] = useState<number>(11);
  const onAdd = () => {
    setCount(count + 1);
  };
  const onRemove = () => {
    setCount(count - 1);
  };
  return (
    <View style={styles.root}>
      <Text>Hola Danny Dzib</Text>
      <Text>count {count}</Text>

      <View style={styles.contentButtons}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#E4ECFA"
          onPress={onAdd}>
          <Text style={styles.plus}>+1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#E4ECFA"
          onPress={onRemove}>
          <Text style={styles.plus}>-1</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    position: 'relative',
    padding: 10,
  },
  contentButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    padding: 10,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  plus: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
