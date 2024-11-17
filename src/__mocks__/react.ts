module.exports = {
  ...jest.requireActual("react"),
  cache: (fn: any) => fn,
  use: (promise: any) => {
    if (promise instanceof Promise) {
      throw promise;
    }
    return promise;
  },
};
