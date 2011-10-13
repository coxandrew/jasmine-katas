function BowlingGame(frames) {
  this.frames = frames;
}

function Frame(first,second) {
  this.first = first;
  this.second = second;
}

Frame.prototype.getTotalPins = function() {
  return this.first + this.second;
}

Frame.prototype.getFirst = function() {
  return this.first;
}

Frame.prototype.isStrike = function() {
  return (this.first == 10);
}

Frame.prototype.isSpare = function() {
  return (!this.isStrike()) && (this.first+this.second == 10);
}

BowlingGame.prototype.getTotalScore = function() {
  var total = 0;
  
  for (var i = 0; i < this.frames.length; ++i) {
    var currFrame = this.frames[i];
    total += currFrame.getTotalPins();
    
    if (currFrame.isSpare()) {
      total += this.getNextBowl(i);
    } else if (currFrame.isStrike()) {
      total += this.getNextTwoBowls(i);
    }
  }
  
  return total;
}

BowlingGame.prototype.getNextBowl = function(frameNumber) {
  return this.frames[frameNumber+1].getFirst();
}

BowlingGame.prototype.getNextTwoBowls = function(frameNumber) {
  var nextFrame = this.frames[frameNumber+1];
  var pins = nextFrame.getTotalPins();
  if (nextFrame.isStrike()) {
    pins += this.frames[frameNumber+2].getFirst();
  }
  return pins;
}
