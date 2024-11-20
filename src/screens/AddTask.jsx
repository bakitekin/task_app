//import liraries
import React, {Component, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import Colors from '../theme/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import uuid from 'react-native-uuid';
import ScreenName from '../router/ScreenName';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddTaskScreen = () => {
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigation = useNavigation();

  const formatDate = date => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };
  const handleJobSelect = job => {
    setSelectedJob(job);
  };

  const saveTask = () => {
    if (todo && startDate && endDate && selectedJob) {
      const newTask = {
        id: uuid.v4(),
        title: todo,
        description: description || '',
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        job: selectedJob,
      };

      setTasks([...tasks, newTask]);
      setTodo('');
      setDescription('');
      setSelectedJob(null);
      console.log('Task saved:', newTask);
      navigation.navigate(ScreenName.TaskList, {tasks: [...tasks]});
    } else {
      console.log('Please fill in all required fields');
    }
  };

  //data
  const professions = [
    'Developer',
    'Frontend Dev',
    'Backend Dev',
    'Full Stack',
    'Mobile Dev',
    'Game Dev',
  ];

  return (
    <View
      className="flex-1 p-4 m-2 top-10"
      style={{backgroundColor: Colors.background.primary}}>
      <Text
        className="font-bold text-xl mt-2"
        style={{color: Colors.text.primary}}>
        Task Name
      </Text>
      <View className="w-full h-16 flex-row items-center bg-white mt-4 rounded-lg p-3">
        <TextInput
          value={todo}
          onChangeText={setTodo}
          placeholder="Task name"
        />
      </View>

      <Text
        className="font-bold text-xl top-8"
        style={{color: Colors.text.primary}}>
        Description
      </Text>
      <View className="w-full h-28 flex-row items-center bg-white mt-12 rounded-lg p-3">
        <TextInput
          value={description}
          onChangeText={setDescription}
          multiline
          placeholder="Description"
        />
      </View>

      <View className="mt-4 flex-row justify-between items-center">
        <View className="flex-1 mr-2">
          <Text className="font-bold text-xl text-gray-600 text-center">
            Start Date
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowStartDatePicker(true);
              setShowEndDatePicker(false);
            }}
            className="flex-row items-center justify-between bg-white w-full h-16 rounded-xl p-4 mt-2">
            <Text className="text-gray-700">{formatDate(startDate)}</Text>
          </TouchableOpacity>

          {showStartDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={onStartDateChange}
            />
          )}
        </View>

        <View className="flex-1 ml-2">
          <Text className="font-bold text-xl text-gray-600 text-center">
            End Date
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowEndDatePicker(true);
              setShowStartDatePicker(false);
            }}
            className="flex-row items-center justify-between bg-white w-full h-16 rounded-xl p-4 mt-2">
            <Text className="text-gray-700">{formatDate(endDate)}</Text>
          </TouchableOpacity>

          <View className="items-center justify-center">
            {showEndDatePicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={onEndDateChange}
              />
            )}
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap mt-6 gap-4 justify-between">
        {professions.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleJobSelect(item)}
            className="h-14 w-28 rounded-xl justify-center text-center"
            style={{
              backgroundColor:
                selectedJob === item ? Colors.primary : Colors.normal,
            }}>
            <Text className="text-white font-bold p-2 text-center">{item}</Text>
          </Pressable>
        ))}
      </View>

      <View className="top-10 w-full">
        <TouchableOpacity
          onPress={saveTask}
          className="w-full h-16 justify-center items-center rounded-xl p-3"
          style={{backgroundColor: Colors.primary}}>
          <Text className="text-center font-bold text-xl text-white">
            Save Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default AddTaskScreen;
