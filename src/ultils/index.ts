import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
export const scale = (size: number) =>
  Math.floor((width / guidelineBaseWidth) * size);

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
