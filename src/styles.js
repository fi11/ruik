import View from './View';
import _styled from './styled';
import StyleSheet from './StyleSheet';

const cn = StyleSheet.classnames;

const styled = (element, styleRules) => {
  return styleRules === undefined ? _styled(View, styleRules) : _styled(element, styleRules);
};

export { StyleSheet, cn, styled };
