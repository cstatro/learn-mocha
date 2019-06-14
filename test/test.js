var mylib = require("../mylib");
const expect = require("chai").expect;

//testing hello world function
describe("Hello World", function() {
  it("should return the text Hello World when called", function() {
    var result = mylib.helloWorld();
    expect(result).equal("Hello there");
  });
});

describe("Format Name", function() {
  it("Formats from last name, first name to full name", function() {
    var result = mylib.formatName("Yang, Andrew");
    expect(result).equal("Andrew Yang");
  });
});
