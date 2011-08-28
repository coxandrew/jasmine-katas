describe("Life", function() {
  var game;

  beforeEach(function() {
    game = new Life();
  });

  it("should have 3 cells", function() {
    game.seed(3);
    expect(game.cells).toEqual(3);
  });
});

function Life() {
}

Life.prototype.seed = function(spores) {
  this.cells = spores;
}
