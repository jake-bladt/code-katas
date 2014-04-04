describe("Goal check", function() {
  it("checks if a goal is exceeded", function() {
    expect(walker_app.isGoalMet(5000, 4000)).toEqual(true);
  });

  it("checks if a goal is met", function() {
    expect(walker_app.isGoalMet(4000, 4000)).toEqual(true);
  });

  it("checks if a goal is not met", function() {
    expect(walker_app.isGoalMet(3000, 4000)).toEqual(false);
  });

});
