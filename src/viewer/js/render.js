(() => {
  var stage = new NGL.Stage("viewport");

  stage.loadFile("demo-mol-files/1blu.mmtf").then(function (component) {
    component.addRepresentation("ball+stick");
    component.autoView();
  });
})();
