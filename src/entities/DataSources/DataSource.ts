import { type IDataSource } from '../../interfaces/IDataSource'
import { type HTTPMethods } from '../../types/types'

export abstract class DataSource implements IDataSource {
  domain: string
  searchParam: string
  searchUrl: string
  headers: any
  httpMethodSearch: HTTPMethods

  constructor (
    domain: string,
    searchParam: string,
    searchUrl: string,
    headers: any,
    httpMethodSearch: HTTPMethods
  ) {
    this.searchParam = searchParam
    this.searchUrl = searchUrl
    this.domain = domain
    this.headers = headers
    this.httpMethodSearch = httpMethodSearch
  }
}
