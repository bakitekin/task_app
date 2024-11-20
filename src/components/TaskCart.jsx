/* eslint-disable no-alert */
//import liraries
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Colors from '../theme/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// create a component
const TaskCart = ({tasks}) => {
  return (
    <View className="gap-2">
      <View className="w-full min-h-40 justify-between rounded-xl p-3 my-2 bg-white">
        <View className="flex-row justify-between mt-2">
          <Text
            style={{color: Colors.text.primary}}
            className="text-xl font-bold">
            Task App
          </Text>
          <View className="flex-row justify-between gap-x-2 items-center">
            <Text
              className="rounded text-center p-1.5"
              style={{
                backgroundColor: Colors.green,
                color: Colors.white,
              }}>
              Planning
            </Text>
            <Pressable>
              <FontAwesome name="edit" size={26} color={Colors.primary} />
            </Pressable>
            <Pressable onPress={() => alert('Delete task')}>
              <FontAwesome name="trash" size={26} color={Colors.red} />
            </Pressable>
          </View>
        </View>
        <Text className="p-1" style={{color: Colors.text.primary}}>
          Bu alan descrption alanıdır.Bu alan descrption alanıdır.Bu alan
          descrption alanıdır.
        </Text>
        <View className="flex-row justify-between gap-x-2 items-center">
          <View className="p-2 justify-center bg-gray-100 rounded-md">
            <Text className="text-lg  ">Start Date:</Text>
            <View className="flex-row justify-between items-center gap-2  ">
              <FontAwesome
                name="calendar-plus-o"
                size={20}
                color={Colors.primary}
              />
              <Text>20/11/2024</Text>
            </View>
          </View>
          <View className=" p-2 justify-center bg-gray-100 rounded-md">
            <Text className="text-lg  ">End Date:</Text>
            <View className="flex-row justify-between items-center gap-2 ">
              <FontAwesome
                name="calendar-check-o"
                size={20}
                color={Colors.primary}
              />
              <Text>20/11/2024</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default TaskCart;
