import axiosBase from "./axios-base";

export interface IChangeActive {
  id: number;
  isActive: boolean;
}

export default class apiBase {
  constructor(public apiName: string) {}

  public create(param: any) {
    const url = `${this.apiName}`;
    return axiosBase.post(url, param);
  }

  update(param: any) {
    const url = `${this.apiName}`;
    return axiosBase.put(url, param);
  }

  getPaging(param: any) {
    const url = `${this.apiName}/paging`;
    return axiosBase.post(url, param);
  }
  getAll() {
    const url = `${this.apiName}/all`;
    return axiosBase.get(url);
  }
  getById(id: any) {
    const url = `${this.apiName}/${id}`;
    return axiosBase.get(url);
  }

  deleteById(id: any) {
    const url = `${this.apiName}/${id}`;
    return axiosBase.delete(url);
  }

  changeActive(param: IChangeActive) {
    const url = `${this.apiName}/${param.id}/change-active?isActive=${param.isActive}`;
    return axiosBase.put(url);
  }
}
