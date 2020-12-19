import { LocalDataSource } from "./data/localDataSource";
import { HtmlDisplay } from './htmlDisplay';


const ds = new LocalDataSource();

async function displayData(): Promise<HTMLElement> {
  const display = new HtmlDisplay()
  display.props = {
    products: await ds.getProducts("name"),
    order: ds.order,
  };

  return display.getContent();
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    displayData().then((element) => {
      const rootElement = document.getElementById("app");
      rootElement.innerHTML = "";
      rootElement.appendChild(element);
    });
  }
};
