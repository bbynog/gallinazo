import axios, { AxiosInstance } from 'axios';

class AxiosService {
  private static instance = new AxiosService();
  private instance: AxiosInstance;

  private constructor() {
    this.instance = axios.create();
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService();
    }

    return AxiosService.instance;
  }
}

export default AxiosService.getInstance();
