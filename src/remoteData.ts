import Axios from "axios";
import { AbstractDataSource } from "./data/abstractDataSource";
import { Product } from "./data/entities";

const protocol = "http";
const hostname = "localhost";
const port = 4600;
const urls = {
  products: `${protocol}://${hostname}:${port}/products`,
  orders: `${protocol}://${hostname}:${port}/orders`,
};

export class RemoteData extends AbstractDataSource {
  loadProducts(): Promise<Product[]> {
    return Axios.get(urls.products).then((response) => response.data);
  }

  storeOrder(): Promise<number> {
    let orderData = {
      lines: [...this.order.orderLines.values()].map((ol) => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity,
      })),
    };
    return Axios.post(urls.orders, orderData).then(
      (response) => response.data.id
    );
  }
}
