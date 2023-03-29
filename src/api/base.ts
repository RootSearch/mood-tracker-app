export interface BaseApi {
  get: Function;
  post: Function;
  put: Function;
  delete: Function;
  option?: Function;
}
