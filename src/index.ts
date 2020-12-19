import { LocalDataSource } from "./data/localDataSource";
import { HtmlDisplay } from './htmlDisplay';
import { RemoteData } from './remoteData';


const ds = new RemoteData()

async function displayData(): Promise<HTMLElement> {
  const display = new HtmlDisplay()
  display.props = {
    dataSource: ds
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
