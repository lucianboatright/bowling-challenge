describe ('Bowling', function(){
  // var bowling;

  beforeEach(function(){
    // bowling = new Bowling();
  });



  it('test that score is added to frame', function(){
    var frame = new Frame();

    frame.bowl(7);

    expect(frame.takeScore()).toBe(7);
  })
})