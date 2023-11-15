import { type IExtractionStrategy } from './interfaces/IExtractionStrategy'
import { DataSource } from './DataSource'
import { type AxiosResponse, type AxiosInstance } from 'axios'
import axiosInstance from '../libs/axios/axios'
import { type IGenericProduct, type HTTPMethods } from '../types/types'

export default class AmazonScrap extends DataSource implements IExtractionStrategy {
  axios: AxiosInstance
  product: IGenericProduct

  constructor (
    url: string,
    searchParam: string,
    searchUrl: string,
    selectors: any,
    headers: any
  ) {
    super(url, searchParam, searchUrl, selectors, headers)
    this.axios = axiosInstance(this.url, this.headers)
  }

  async rawProductData (searchString: string, method: HTTPMethods): Promise<AxiosResponse< any, any> | undefined> {
    try {
      const rawProductData = await this.axios[method](searchString)
      return rawProductData
    } catch (error) {
      console.error('Fail when tried to get product data')
      throw new Error(error.message)
    }
  }

  shuffleHeaders (): any {
    throw new Error('Method not implemented.')
  }
}
