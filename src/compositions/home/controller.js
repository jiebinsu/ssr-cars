import config from "./config";
import buildComposition from "../../builder/compositionUtils";
import Home from "../../views/Home";

const homeController = async (req, res) => {
  const { name } = req.query;
  const render = {
    component: <Home name={name} />,
    serverData: { name },
  };

  res.send(await buildComposition({ config, req, render }));
};

export default homeController;
