/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../ultils';

const Header = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scale(20),
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: scale(60),
          width: scale(60),
          backgroundColor: '#A3E2B1',
          borderRadius: scale(30),
        }}
      />
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
          <Text>name</Text>
          <Text>content</Text>
        </View>
        <View
          style={{
            height: scale(60),
            width: scale(60),
            backgroundColor: '#B5B89F',
            borderRadius: scale(30),
            marginLeft: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
