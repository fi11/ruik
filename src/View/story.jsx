import React from 'react';
import { storiesOf } from '@storybook/react';

import View from './View';
import { StyleSheet, styled, buildShadowBorder }from '../styles';

const st = StyleSheet.create({
  blackSquare: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
  },
  margin: {
    marginRight: 5,
    marginBottom: 5,
  },
  asRows: {
    flexDirection: 'column',
  }
});

const BlackSquare = styled(View, {
  width: 40,
  height: 40,
  backgroundColor: 'black',
});

const RedSquare = styled(BlackSquare, {
  backgroundColor: 'red',
});

const RedSquareWithBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('3', '#333'),
});

const RedSquareWithOuterBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('3', '#333', true),
});

const RedSquareWithTopBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('3 0 0 0', '#333'),
});

const RedSquareWithBottomBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('0 0 3 0', '#333'),
});

const RedSquareWithTopAndBottomBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('3 0 3', '#333'),
});

const RedSquareWithRightBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('0 3 0 0', '#333'),
});

const RedSquareWithLeftBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('0 0 0 3', '#333'),
});

const RedSquareWithRightAndLeftBorder = styled(RedSquare, {
  boxShadow: buildShadowBorder('0 3 0', '#333'),
});

storiesOf('View', module)
  .add('with style', () => (
    <View style={{ width: 40, height: 40, backgroundColor: 'black' }} />
  ))
  .add('with styles', () => (
    <View styles={[st.blackSquare]} />
  ))
  .add('with styles and few rules', () => (
    <View>
      <View styles={[st.blackSquare, st.margin]} />
      <View styles={[st.blackSquare, st.margin]} />
      <View styles={[st.blackSquare, st.margin]} />
    </View>
  ))
  .add('flex', () => (
    <View styles={[st.asRows]}>
      <View styles={[st.blackSquare, st.margin]} />
      <View styles={[st.blackSquare, st.margin]} />
      <View styles={[st.blackSquare, st.margin]} />
    </View>
  ))
  .add('styled', () => (
    <BlackSquare />
  ))
  .add('styled extend', () => (
    <RedSquare />
  ))
  .add('with border as shadow', () => (
    <RedSquareWithBorder />
  ))
  .add('with outer border as shadow', () => (
    <RedSquareWithOuterBorder />
  ))
  .add('with top border as shadow', () => (
    <RedSquareWithTopBorder />
  ))
  .add('with bottom border as shadow', () => (
    <RedSquareWithBottomBorder />
  ))
  .add('with top and bottom border as shadow', () => (
    <RedSquareWithTopAndBottomBorder />
  ))
  .add('with right border as shadow', () => (
    <RedSquareWithRightBorder />
  ))
  .add('with left border as shadow', () => (
    <RedSquareWithLeftBorder />
  ))
  .add('with right and left border as shadow', () => (
    <RedSquareWithRightAndLeftBorder />
  ));