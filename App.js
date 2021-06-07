import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const deleteTask = (index) => {
    let arr = [...taskItems];
    arr.splice(index, 1);
    setTaskItems(arr);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.heading}>Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.length ? taskItems.map((item, index) => {
              return (
                <View key={index}>
                  <Task text={item} index={index} deleteTask={deleteTask} />
                </View>
              )
            }) : (<View><Text>You have no tasks for Today</Text></View>)
          }
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.writeWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput style={styles.textInput} value={task} onChangeText={(text) => setTask(text)} placeholder={'Write a task'} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addButtonWrapper}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  writeWrapper: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  textInput: {
    backgroundColor: '#fff',
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderRadius: 60
  },
  addButtonWrapper: {
    height: 60,
    width: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  plus: {
    fontSize: 25
  }
});
