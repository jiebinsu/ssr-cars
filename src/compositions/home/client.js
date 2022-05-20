import { hydrate } from "react-dom";
import Home from "../../views/Home";

const serverData = window.__SERVER_DATA__;
hydrate(<Home {...serverData} />, document.getElementById("rentalcars"));
