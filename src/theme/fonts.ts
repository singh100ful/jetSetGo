import {ColorPresets} from './colors';
import {moderateScale} from './metrics';

export const scaleFont = (size: number, height: number = 1.4) => {
  const result = moderateScale(size);
  return {
    fontSize: result,
    lineHeight: result * height,
  };
};

export const FONT_LIGHT = 'Poppins-Light';
export const FONT_REGULAR = 'Poppins-Regular';
export const FONT_MEDIUM = 'Poppins-Medium';
export const FONT_MEDIUM_ITALIC = 'Poppins-MediumItalic';
export const FONT_BOLD = 'Poppins-Bold';
export const FONT_BOLD_ITALIC = 'Poppins-BoldItalic';

export const light = {
  fontFamily: FONT_LIGHT,
};
export const regular = {
  fontFamily: FONT_REGULAR,
};
export const medium = {
  fontFamily: FONT_MEDIUM,
};
export const mediumItalic = {
  fontFamily: FONT_MEDIUM_ITALIC,
};
export const bold = {
  fontFamily: FONT_BOLD,
};
export const boldItalic = {
  fontFamily: FONT_BOLD_ITALIC,
};

export const defaultTexts = {
  title: {
    ...bold,
    color: ColorPresets.primaryText,
    ...scaleFont(32),
    letterSpacing: 0,
  },
  heading: {
    ...bold,
    color: ColorPresets.primaryText,
    ...scaleFont(24),
    letterSpacing: 0,
  },
  bodyBold: {
    ...bold,
    color: ColorPresets.primaryText,
    ...scaleFont(16),
    letterSpacing: 0,
  },
  body: {
    ...medium,
    color: ColorPresets.primaryText,
    ...scaleFont(16),
    letterSpacing: 0,
  },
  bodySubtitle: {
    ...medium,
    color: ColorPresets.primaryText,
    ...scaleFont(14),
    letterSpacing: 0,
  },
  paragraph: {
    ...regular,
    color: ColorPresets.primaryText,
    ...scaleFont(14),
    letterSpacing: 0,
  },
  caption: {
    ...regular,
    color: ColorPresets.gray,
    ...scaleFont(12),
    letterSpacing: 0,
  },
  smallText: {
    ...medium,
    color: ColorPresets.primaryText,
    ...scaleFont(9),
    letterSpacing: 0,
  },
  tabLabel: {
    ...regular,
    ...scaleFont(13),
    color: ColorPresets.white,
    letterSpacing: 0,
  },
  input: {
    ...medium,
    color: ColorPresets.primaryText,
    ...scaleFont(16),
    letterSpacing: 0,
  },
  placeHolder: {
    ...regular,
    ...scaleFont(18),
    color: ColorPresets.primaryText,
    letterSpacing: 0,
  },
};
