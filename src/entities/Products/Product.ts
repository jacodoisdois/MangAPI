import { type Cheerio, type AnyNode } from 'cheerio'
import { type GenericProduct, type IAttributeSelector } from '../../types/types'
import { type IDataSource } from '../../interfaces/IDataSource'
import { type IGenericProduct } from '../../interfaces/IGenericProduct'

export class Product implements IGenericProduct {
  dataSource: IDataSource
  selectors: IAttributeSelector[]
  searchRegex: RegExp

  constructor (dataSource: IDataSource) {
    this.dataSource = dataSource
  }

  getFormatedProductData (productPageHtml: string): GenericProduct {
    return {
      rawPrice: 0,
      discountPrice: 0,
      title: '',
      description: '',
      thereIsDiscount: false,
      discountPercentual: 10
    }
  }

  generateSearchString (itemToSearch: string): string {
    return this.dataSource.searchParam + itemToSearch
  }

  getProductAttributeValue (productHtml: Cheerio<AnyNode>, attributeSelector: IAttributeSelector): number | string {
    let attributeContent = productHtml.find(attributeSelector.css).text().trim()

    if (attributeSelector.slice && attributeSelector.slice > 0) attributeContent = attributeContent.slice(attributeSelector.slice)

    if (attributeSelector.type === 'number') {
      if (!attributeContent) return 0
      const parsedValue = parseFloat(attributeContent.replace('R$', '').replace(',', '.'))
      return parsedValue
    }

    return attributeContent
  }
}
