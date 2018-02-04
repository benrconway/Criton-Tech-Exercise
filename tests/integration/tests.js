// I do not have any unit tests as my code has no models in it, however
// I will now attempt to do integration tests to test web functionality

// This code has been taken from a project that I did not write, and represents
// my first attempt to understand testing the Dom directly rather than simply
// experimenting with running code and making alterations as it works.
import basicView from '../../../client/src/views/basic_view.js'
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  //It should be able to fire a keyup event and trigger everything else... I hope
  it('should fire the keyup and get an answer', function(){
    const parent = new basicView({el: $(HTML),}).displayBasicContent();

    const parentDiv = element(by.css('#input-div'));
    const latOutput = element(by.css('#lat-output'));

    let input = element(by.css('#address-input'));
    input.innerText = "Edinburgh";
    console.log("trying to fire enter key now");
    const e = $.Event("keyup");
    e.which = 13;
    parentDiv.$("#input-div").trigger(e);

    expect(latOutput.getAttribute('value').to.eventually.equal('55.953252'));
  })

// Template from Stack Overflow
  // it("should call cancelTextTimer", function(done) {
  //     var searchBox = new SearchBoxView({el: $(HTML),}).render();
  //     var changeTextTimer = sinon.spy(searchBox, "cancelTextTimer");
  //     _.defer(changeTextTimer.restore);
  //
  //     var e = $.Event("keydown");
  //     e.which = 65;
  //     searchBox.$(".search-box").trigger(e);
  //
  //     setTimeout(() => {
  //         changeTextTimer.should.have.been.calledOnce;
  //         done();
  //     }, 0);


});
