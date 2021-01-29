import { Middleware } from 'redux'

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log("1.当前数据", store.getState());
  console.log("2.更改数据", action);
  next(action)
  console.log("3.已更改数据", store.getState());



}