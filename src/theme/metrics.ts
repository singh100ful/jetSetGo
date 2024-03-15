import {Dimensions, PixelRatio} from 'react-native';
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375; // change this based upon the designs given
const guidelineBaseHeight = 812; // change this based upon the designs given

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor: number = 0.5) =>
  PixelRatio.roundToNearestPixel(size + (scaleSize(size) - size) * factor);

export const Scale = {
  xxs: moderateScale(2),
  xs: moderateScale(5),
  sm: moderateScale(8),
  md: moderateScale(10),
  md2: moderateScale(12),
  md3: moderateScale(14),
  base: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(30),
  xxl: moderateScale(40),
  xxxl: moderateScale(60),
};
