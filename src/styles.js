export { StyleSheet, getServerSideSheets } from './styleSheet';

export const cn = (...args) => {
  return [...args].filter(i => i).join(' ');
};