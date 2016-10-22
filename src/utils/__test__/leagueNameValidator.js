/**
 * Created by graeme on 15/10/2016.
 */
var expect = require('expect.js');
var leagueValidator;

beforeEach(function() {
  // load a fresh version of entries
  leagueValidator = require('../leagueNameValidator');
});

afterEach(function() {
  // unload the entries module
  delete require.cache[require.resolve('../leagueNameValidator')];
});


describe('Validation of league names', function() {

  it ('should return an object containing the age group and the division', function() {

    var league = leagueValidator('U9A');

    expect(league.ageGroup).to.be('U9');
    expect(league.division).to.be('A');

    league = leagueValidator('U11A');

    expect(league.ageGroup).to.be('U11');
    expect(league.division).to.be('A');

    league = leagueValidator('U11B1');

    expect(league.ageGroup).to.be('U11');
    expect(league.division).to.be('B1');

    league = leagueValidator('U11G');

    expect(league.ageGroup).to.be('U11');
    expect(league.division).to.be('G');
  });

  it ('should throw an error stating age group is invalid', function() {

    var errorTextPrefix = 'League name ';
    var errorTextSuffix = ' is incorrect. Valid values are: ';
    errorTextSuffix += 'U9A, U9B, ';
    errorTextSuffix += 'U11A, U11B1, U11B2, U11G, ';
    errorTextSuffix += 'U13A, U13B1, U13B2, U13G, ';
    errorTextSuffix += 'U15A, U15B1, U15B2, U15G, ';
    errorTextSuffix += 'U17';

    try {
      leagueValidator('U1A');
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U1A' + errorTextSuffix);
    }

    try {
      leagueValidator('U1B1');
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U1B1' + errorTextSuffix);
    }

    try {
      leagueValidator('U19A');
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U19A' + errorTextSuffix);
    }

    try {
      leagueValidator('U19B1');
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U19B1' + errorTextSuffix);
    }

  });

  it ('should throw an error stating the division is invalid', function() {

    var errorTextPrefix = 'League name ';
    var errorTextSuffix = ' is incorrect. Valid values are: ';
    errorTextSuffix += 'U9A, U9B, ';
    errorTextSuffix += 'U11A, U11B1, U11B2, U11G, ';
    errorTextSuffix += 'U13A, U13B1, U13B2, U13G, ';
    errorTextSuffix += 'U15A, U15B1, U15B2, U15G, ';
    errorTextSuffix += 'U17';

    try {
      leagueValidator("U9C");
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U9C' + errorTextSuffix);
    }

    try {
      leagueValidator("U9B1");
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U9B1' + errorTextSuffix);
    }

    try {
      leagueValidator("U11C");
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U11C' + errorTextSuffix);
    }

    try {
      leagueValidator("U11B3");
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U11B3' + errorTextSuffix);
    }

    try {
      leagueValidator("U17C");
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U17C' + errorTextSuffix);
    }

    try {
      leagueValidator("U17B1");
    }
    catch(error) {
      expect(error).to.be(errorTextPrefix + 'U17B1' + errorTextSuffix);
    }
  });

});