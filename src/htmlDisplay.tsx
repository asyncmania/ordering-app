import { createElement } from './tools/jsxFactory'
import { Order, Product } from './data/entities';

export class HtmlDisplay {
  props:{
    products: Product[],
    order: Order
  }

  getContent(): HTMLElement {
    return <h3 className="bg-secondary text-center text-white p-2"> { this.getElementText() } </h3>
    
  }

  getElementText() {
    return `${this.props.products.length}` + `Order tota: $${this.props.order.total}`
  }
}