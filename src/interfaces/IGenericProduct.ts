import { type IDataSource } from './IDataSource'

export interface IGenericProduct {
  dataSource: IDataSource
  generateSearchString: (itemToSearch: string) => string
}
