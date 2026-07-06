export function loadBlocksRender() {
  let stage = new NGL.Stage("blocks-view");

  window.addEventListener("resize", (_) => {
    stage.handleResize();
  });

  const shape = new NGL.Shape("shape", {
    disableImpostor: true,
  });
  shape.addBox([0, 3, 0], [1, 0, 1], 2, [0, 1, 1], [1, 0, 1]);

  const shapeComp = stage.addComponentFromObject(shape);
  shapeComp.addRepresentation("buffer");
  shapeComp.autoView();
}
