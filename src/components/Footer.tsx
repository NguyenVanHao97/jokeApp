/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../ultils';

const Footer = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#28b263',
        marginTop: scale(10),
        height: scale(200),
      }}>
      <Text style={{textAlign: 'center'}}>Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
