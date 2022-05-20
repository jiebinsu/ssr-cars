import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import templateBuilder from "./templateBuilder";

const getAssetManifest = () => {
  const assetManifestFilePath = path.resolve(__dirname, "../../build/public/asset-manifest.json");
  return JSON.parse(fs.readFileSync(assetManifestFilePath));
};

const linkTag = (css) => (css ? `<link rel="stylesheet" href="${css}" />` : "");
const scriptTag = (js) => (js ? `<script async src="${js}"></script>` : "");

const getAssetsFor = (config) => {
  const assetManifest = getAssetManifest();
  const { name, hydrate, externalCss = [], externalJs = [] } = config;
  const cssFiles = [...externalCss];
  const jsFiles = [...externalJs];

  if (process.env.ENVIRONMENT === "production") {
    cssFiles.push(assetManifest[`${name}.css`]);
  }
  if (hydrate) jsFiles.push(assetManifest[`${name}.js`]);

  return {
    css: cssFiles.map(linkTag).join(""),
    js: jsFiles.map(scriptTag).join(""),
  };
};

const buildComposition = async ({ req, config, render: renderOverride }) => {
  const { metaTitle = "Rentalcars", hydrateId = "rentalcars" } = config;

  const { css, js } = getAssetsFor(config);
  const { render } = config;
  let component;
  let serverData;

  if (typeof render === "function") {
    ({ component, serverData = {} } = await render(req));
  } else {
    component = render;
  }

  if (renderOverride?.component) {
    ({ component, serverData = {} } = renderOverride);
  }

  const jsx = renderToString(component);
  const templateOptions = {
    metaTitle,
    hydrateId,
    css,
    js,
    jsx,
    serverData,
  };

  return templateBuilder(templateOptions);
};

export default buildComposition;
