export class Types {
  static GET = 1;

  static POST = 2;

  static MULTIPART = 3;
}

class Request {
  url = undefined;

  type = Types.GET;

  payload = undefined;

  tag = undefined;

  headers = undefined;
}
export { Request };

export const SOMETHING_WRONG = 9999;
export const INTERNET_NOT_CONNECTED = 498;
