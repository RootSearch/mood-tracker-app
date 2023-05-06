export const log = (...msg: any) => {
  __DEV__ && console.log(...msg);
};

export const error = (...msg: any) => {
  __DEV__ && console.error(...msg);
};

export const warn = (...msg: any) => {
  __DEV__ && console.warn(...msg);
};
