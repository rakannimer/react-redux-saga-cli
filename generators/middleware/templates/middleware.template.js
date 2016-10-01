const <%= MIDDLEWARE_NAME %> = store => next => action => {
  const result = next(action);
  return result;
};
export default <%= MIDDLEWARE_NAME %>;
