describe("Bowling", function() {
  var game;

  it("should score a 14", function() {
		game = new BowlingGame([new Frame(3,4),
														new Frame(3,4)]);
		expect(game.getTotalScore()).toEqual(14);
		// game = new Bowling(scores);
    // game.seed(3);
    // expect(game.cells).toEqual(3);
  });

	it("should score a 20", function() {
		game = new BowlingGame([new Frame(3,7),
														new Frame(3,4)]);
		expect(game.getTotalScore()).toEqual(20);
	});

  it("should score a 24", function() {
	  game = new BowlingGame([new Frame(10,0),
														new Frame(3,4)]);
		expect(game.getTotalScore()).toEqual(24);
	});
	
  it("should score a 60", function() {
	  game = new BowlingGame([new Frame(10,0),
														new Frame(10,0),
														new Frame(10,0),
														new Frame(0,0)]);
		expect(game.getTotalScore()).toEqual(60);
	});

  it("should score a spare, gutter", function() {
	  game = new BowlingGame([new Frame(0,10),
														new Frame(0,0)]);
		expect(game.getTotalScore()).toEqual(10);
	});
	
});