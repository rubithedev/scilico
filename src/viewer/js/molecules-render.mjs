export function loadMoleculeRender() {
  let stage = new NGL.Stage("molecular-view");

  window.addEventListener("resize", (_) => {
    stage.handleResize();
  });

  stage.loadFile("demo-mol-files/1blu.mmtf").then((component) => {
    component.addRepresentation("ball+stick", { color: "atomindex" });
    component.autoView();
  });
}
