import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {scale} from '../ultils';
import {JokeType} from '../model/contants';

interface props {
  gripView: JokeType[];
}

const GripData: FC<props> = props => {
  const {gripView} = props;

  return (
    <View style={styles.container}>
      <Text>tổng kết lại </Text>
      <View style={styles.view}>
        <Text>truyện số {gripView[0].id}: </Text>
        <Text> {gripView[0].like ? 1 : 0} lượt thích</Text>
      </View>
      <View style={styles.view}>
        <Text>truyện số {gripView[1].id}: </Text>
        <Text> {gripView[1].like ? 1 : 0} lượt thích</Text>
      </View>
      <View style={styles.view}>
        <Text>truyện số {gripView[2].id}: </Text>
        <Text> {gripView[2].like ? 1 : 0} lượt thích</Text>
      </View>
      <View style={styles.view}>
        <Text>truyện số {gripView[3].id}: </Text>
        <Text> {gripView[3].like ? 1 : 0} lượt thích</Text>
      </View>
      <View style={styles.view}>
        <Text>truyện số {gripView[4].id}: </Text>
        <Text> {gripView[4].like ? 1 : 0} lượt thích</Text>
      </View>
      <View style={styles.view}>
        <Text>truyện số {gripView[5].id}: </Text>
        <Text> {gripView[5].like ? 1 : 0} lượt thích</Text>
      </View>
    </View>
  );
};

export default GripData;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: scale(20),
  },
  view: {display: 'flex', flexDirection: 'row'},
});
