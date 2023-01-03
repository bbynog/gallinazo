import axios, { AxiosInstance } from 'axios';

class AxiosService {
  private static serviceInstance = new AxiosService();
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create();
  }

  getInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  public static getServiceInstance(): AxiosService {
    if (!AxiosService.serviceInstance) {
      AxiosService.serviceInstance = new AxiosService();
    }

    return AxiosService.serviceInstance;
  }
}

export default AxiosService.getServiceInstance();
