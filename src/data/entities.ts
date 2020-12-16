export type Product = {
  id: number,
  name: string,
  description: string,
  category: string,
  price: number
}

export class OrderLine {
  constructor(public product: Product, public quantity: number) {}

  get total(): number {
    return this.product.price * this.quantity
  }
}


export class Order {
  private lines = new Map<number, OrderLine>();

  constructor(initailLines?: OrderLine[]) {
    if(initailLines) {
      initailLines.forEach(ol => this.lines.set(ol.product.id, ol))
    }
  }
}