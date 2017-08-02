import View from './View';
import _styled from './styled';
import StyleSheet from './StyleSheet';

const cn = StyleSheet.classnames;

const styled = (element, styleRules) => {
  return styleRules === undefined
    ? _styled(View, styleRules)
    : _styled(element, styleRules);
};

const addPXSuffix = (value, isNegative) => {
  return +value ? `${isNegative ? '-' : ''}${value}px` : 0;
};

const buildShadowBorder = (borderWidth, borderColor, out) => {
  const inset = out ? '' : 'inset ';
  const split = String(borderWidth)
    .replace(/px/g, '')
    .split(' ')
    .map(item => +item);
  const length = split.length;
  let [topWidth, rightWidth, bottomWidth, leftWidth] = split;

  if (length === 1) {
    rightWidth = topWidth;
    bottomWidth = topWidth;
    leftWidth = topWidth;
  } else if (length === 2) {
    bottomWidth = topWidth;
    leftWidth = rightWidth;
  } else if (length === 3) {
    leftWidth = rightWidth;
  }

  if (
    topWidth === rightWidth &&
    topWidth === bottomWidth &&
    topWidth === leftWidth
  ) {
    return topWidth
      ? `${inset}0 0 0 ${addPXSuffix(topWidth)} ${borderColor}`
      : 'none';
  }

  let topAndLeft = '';
  let bottomAndRight = '';

  if (topWidth && leftWidth) {
    topAndLeft = `${inset}${addPXSuffix(leftWidth)} ${addPXSuffix(
      topWidth,
    )} 0 0 ${borderColor}`;
  } else if (topWidth) {
    topAndLeft = `${inset}0 ${addPXSuffix(topWidth)} 0 0 ${borderColor}`;
  } else if (leftWidth) {
    topAndLeft = `${inset}${addPXSuffix(leftWidth)} 0 0 0 ${borderColor}`;
  }

  if (bottomWidth && rightWidth) {
    bottomAndRight = `${inset}${addPXSuffix(rightWidth, true)} ${addPXSuffix(
      bottomWidth,
      true,
    )} 0 0 ${borderColor}`;
  } else if (bottomWidth) {
    bottomAndRight = `${inset}0 ${addPXSuffix(
      bottomWidth,
      true,
    )} 0 0 ${borderColor}`;
  } else if (rightWidth) {
    bottomAndRight = `${inset}${addPXSuffix(
      rightWidth,
      true,
    )} 0 0 0 ${borderColor}`;
  }

  let result = [];

  topAndLeft && result.push(topAndLeft);
  bottomAndRight && result.push(bottomAndRight);

  return result.join(',');
};

export { StyleSheet, cn, styled, addPXSuffix, buildShadowBorder };
