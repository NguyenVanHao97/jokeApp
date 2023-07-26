import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../ultils';

const DefaultJoke = () => {
  return (
    <View>
      <Text style={styles.text}>Bạn đã xem hết truyện cười</Text>
    </View>
  );
};

export default DefaultJoke;

const styles = StyleSheet.create({
  text: {marginTop: scale(20), textAlign: 'center'},
});
