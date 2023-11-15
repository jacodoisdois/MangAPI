export class DataSource {
  url: string
  searchParam: string
  searchUrl: string
  selectors: any
  headers: any

  constructor (
    url: string,
    searchParam: string,
    searchUrl: string,
    selectors: any,
    headers: any
  ) {
    this.searchParam = searchParam
    this.searchUrl = searchUrl
    this.url = url
    this.selectors = selectors
    this.headers = headers
  }
}
