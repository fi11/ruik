import React from 'react';
import StyleSheet from './StyleSheet';

export default (element, styleRules) => {
  if (!element.__IS_WRAPPER__ && typeof element !== 'string') {
    throw new Error('styled error: you must use string or another styled component as element argument');
  }

  if (element.__IS_WRAPPER__) {
    styleRules = { ...element.getRawStyles(), ...styleRules };
  }

  let [tag, elementName] = element.__IS_WRAPPER__ ?
    [element.getTagName(), element.name || element.getElementName()] :
    element.split('.');

  elementName = elementName || 's';

  const className = StyleSheet.create({
    [elementName]: styleRules
  })[elementName];

  const Wrapper = new Function(
    'createElement',
    `return function Styled${elementName === 's' ? elementName : elementName.replace(/^Styled/, '')}(props){ return createElement(props) }`
  )(({ styles = [], ...props })  => {
    return React.createElement(tag, { ...props, className: StyleSheet.classnames(className, ...styles) })
  });

  Wrapper.getRawStyles = () => ({ ...styleRules });
  Wrapper.getTagName = () => tag;
  Wrapper.getElementName = () => elementName;
  Wrapper.__IS_WRAPPER__ = true;

  return Wrapper;
};
