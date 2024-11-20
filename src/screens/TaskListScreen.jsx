import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Colors from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import ScreenName from '../router/ScreenName';
import TaskCart from '../components/TaskCart';

const TaskListScreen = ({route}) => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState(route.params?.tasks || []);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClearAll = useCallback(() => {
    setTasks([]);
  }, []);

  const handleSearchTask = useCallback(text => {
    setSearchQuery(text);
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View
      style={{backgroundColor: Colors.background.primary}}
      className="flex-1">
      <View
        style={{width: Dimensions.get('screen').width}}
        className="h-full absolute p-4">
        <SafeAreaView className="flex-1 mb-20">
          <View className="flex flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.Pomodoro)}
              style={{backgroundColor: Colors.white}}
              className="rounded-lg h-12 w-32 justify-center items-center">
              <Text
                className="font-bold text-center"
                style={{color: Colors.primary}}>
                Pomodoro
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClearAll}
              style={{backgroundColor: Colors.white}}
              className="rounded-lg h-12 w-32 justify-center items-center">
              <Text className="font-bold" style={{color: Colors.primary}}>
                Clear All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full h-14 flex-row items-center bg-white mt-4 rounded-lg p-3">
            <Feather name="search" size={24} color={Colors.text.primary} />
            <TextInput
              className="p-1 flex-1"
              placeholder="Search a task"
              value={searchQuery}
              onChangeText={handleSearchTask}
            />
          </View>
          <Text
            className="text-3xl font-bold mt-4"
            style={{color: Colors.primary}}>
            Task
          </Text>
          <ScrollView className="flex-1">
            <TaskCart />
            <TaskCart />
            <TaskCart />
            {/* {tasks.length > 0 ? (
              <TaskCart tasks={filteredTasks} />
            ) : (
              <View className="flex-1 justify-center items-center mt-6 overflow-hidden">
                <LottieView
                  source={require('../assets/Animations/empty.json')}
                  autoPlay
                  loop
                  style={{width: 300, height: 300}}
                />
                <View className="absolute bottom-20">
                  <Text className="font-bold" style={{color: Colors.primary}}>
                    {searchQuery
                      ? 'No tasks match your search'
                      : 'Hey! Create new tasks...'}
                  </Text>
                </View>
              </View>
            )} */}
          </ScrollView>
          <View className="absolute -bottom-20 w-full">
            <TouchableOpacity
              className="w-full h-16 justify-center items-center rounded-xl p-3"
              style={{backgroundColor: Colors.primary}}
              onPress={() => navigation.navigate(ScreenName.AddTask)}>
              <Text className="text-center font-bold text-xl text-white">
                Add Task
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default TaskListScreen;
