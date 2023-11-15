import { Product } from '../entities/Products/Product'
import { type IDataSource } from '../interfaces/IDataSource'

export default class ProductRepository {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getProductData (itemToSearch: string, dataSource: IDataSource) {
    const product = new Product(dataSource)
    const searchString = product.generateSearchString(itemToSearch)
    const rawProductData = dataSource.rawProductData(searchString, product.searchRegex)
  }
}
