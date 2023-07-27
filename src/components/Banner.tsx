import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../ultils';

const Banner = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#28b263',
        marginTop: scale(10),
      }}>
      <View style={{marginVertical: scale(50)}}>
        <Text style={{color: 'white'}}>A joke a day keep the doctor away</Text>
        <Text style={{color: 'white'}}>A joke a day keep the doctor away</Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
