import * as MoleculeRender from "./molecules-render.mjs";
import * as BlocksRender from "./blocks-render.mjs";

function removeLoadingLabels() {
  const content = document.querySelector(".content");
  if (content)
    content.querySelectorAll(".loading").forEach((node) => node.remove());
}

(() => {
  removeLoadingLabels();
  MoleculeRender.loadMoleculeRender();
  BlocksRender.loadBlocksRender();
})();
