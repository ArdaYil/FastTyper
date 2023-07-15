import axios, { AxiosResponseHeaders } from "axios";
import get from "./configuration";

const axiosInstance = axios.create({
  baseURL: get("apiEndpoint"),
});

export interface FetchResponse<T> {
  data: T;
  headers: AxiosResponseHeaders;
}

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getAll() {
    return axiosInstance
      .get<T>(this.endpoint)
      .then(({ data, headers }) => ({ data, headers }));
  }
}

export default APIClient;
