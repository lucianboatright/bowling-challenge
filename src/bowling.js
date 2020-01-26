function Frame(){
  this.frameBowls= [];
}

Frame.prototype.bowl = function(scorePins) {
  this.frameBowls.push(scorePins); 
}

Frame.prototype.takeScore = function(){
  return this.frameBowls.reduce((a,b) => a + b);
}