import { type Cheerio, type AnyNode } from 'cheerio'
import { type IAttributeSelector, type IGenericProduct } from '../types/types'
import { type IExtractionStrategy } from './interfaces/IExtractionStrategy'

export class Product implements IGenericProduct {
  rawPrice: number
  discountPrice: number
  discountPercentual: number
  title: string
  description: string
  thereIsDiscount: boolean
  dataSource: IExtractionStrategy

  getFormatedProductData (productPageHtml: string): IGenericProduct {
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
