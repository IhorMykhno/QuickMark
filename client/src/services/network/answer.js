import { axiosClient } from "../axios";

export class Answer {
  static TestRequest() {
    return axiosClient.get('/test');
  }
}
