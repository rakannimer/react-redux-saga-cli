const <%= MIDDLEWARE_NAME %> = store => next => action => {

  let result = next(action);
  return result;

}
export  default <%= MIDDLEWARE_NAME %>;
