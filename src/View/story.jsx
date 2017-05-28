import React from 'react';
import { storiesOf } from '@storybook/react';

import View from './View';
import { StyleSheet }from '../styles';

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
  ));