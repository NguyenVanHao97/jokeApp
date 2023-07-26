import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../ultils';

const Loading = () => {
  return (
    <View
      style={{
        marginTop: scale(20),
      }}>
      <ActivityIndicator size="large" animating />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
