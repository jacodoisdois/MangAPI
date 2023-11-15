import { type DataSource } from '../DataSource'
import { type HTTPMethods } from '../../types/types'
import { type AxiosResponse } from 'axios'

export interface IExtractionStrategy extends DataSource {
  rawProductData: (itemToSearch: string, method: HTTPMethods) => Promise<AxiosResponse< any, any> | undefined>
  shuffleHeaders: () => any
}
