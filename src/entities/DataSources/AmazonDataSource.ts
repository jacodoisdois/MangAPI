import { DataSource } from './DataSource'
import { type AxiosResponse, type AxiosInstance } from 'axios'
import axiosInstance from '../../libs/axios/axios'
import { type IGenericProduct } from '../../interfaces/IGenericProduct'
import { type HTTPMethods } from '../../types/types'
import { type IAmazonDataSource } from '../../interfaces/IAmazonDataSource'

export default class AmazonDataSource extends DataSource implements IAmazonDataSource {
  axios: AxiosInstance
  product: IGenericProduct

  constructor (
    url: string,
    searchParam: string,
    searchUrl: string,
    httpMethodSearch: HTTPMethods,
    headers: any
  ) {
    super(url, searchParam, searchUrl, headers, httpMethodSearch)
    this.axios = axiosInstance(this.domain, this.headers)
  }

  httpMethodSearch: HTTPMethods

  async rawProductData (searchString: string): Promise<AxiosResponse< any, any> | undefined> {
    try {
      const rawProductData = await this.axios[this.httpMethodSearch](searchString)
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
