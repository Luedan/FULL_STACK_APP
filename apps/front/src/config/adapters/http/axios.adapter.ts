import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";
import { HttpAdapter } from "./http.adapter";

/**
 * AxiosAdapter class that implements the HttpAdapter interface.
 * This adapter is used for making HTTP requests using Axios library.
 */
export class AxiosAdapter implements HttpAdapter {
  /**
   * AxiosInstance object to make HTTP requests.
   * @public _axiosInstance
   */
  public _axiosInstance: AxiosInstance;

  /**
   * Constructor of the AxiosAdapter class.
   * @param options CreateAxiosDefaults object to configure the Axios instance.
   */
  constructor(options: CreateAxiosDefaults) {
    this._axiosInstance = axios.create(options);
  }

  /**
   * Method to make a GET request using Axios.
   * @param url string with the URL to make the request.
   * @param options AxiosRequestConfig object with the request configuration.
   * @returns Promise with the response data.
   * @template T type of the response data.
   */
  async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this._axiosInstance.get(url, options);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching get: " + error);
    }
  }

  /**
   * Method to make a POST request using Axios.
   * @param url string with the URL to make the request.
   * @param body any with the request body.
   * @param options AxiosRequestConfig object with the request configuration.
   * @returns Promise with the response data.
   * @template T type of the response data.
   * @template R type of the request body.
   */
  async post<T, R>(
    url: string,
    body: R,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this._axiosInstance.post(url, body, options);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching get: " + error);
    }
  }

  /**
   * Method to make a PUT request using Axios.
   * @param url string with the URL to make the request.
   * @param body any with the request body.
   * @param options AxiosRequestConfig object with the request configuration.
   * @returns Promise with the response data.
   * @template T type of the response data.
   * @template R type of the request body.
   */
  async put<T, R>(
    url: string,
    body: R,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this._axiosInstance.put(url, body, options);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching get: " + error);
    }
  }

  /**
   * Method to make a DELETE request using Axios.
   * @param url string with the URL to make the request.
   * @param options AxiosRequestConfig object with the request configuration.
   * @returns Promise with the response data
   * @throws Error if the request fails.
   * @template T type of the response data.
   */
  async delete<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this._axiosInstance.delete(url, options);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching get: " + error);
    }
  }
}
