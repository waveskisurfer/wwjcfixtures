/**
 * Created by graeme on 15/10/2016.
 */
var expect = require('expect.js');
var leagueValidator = require('../leagueNameValidator');

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

  });

  it ('should throw an error stating age group is invalid', function() {

    var errorText = 'League name is incorrect. ' +
                    'Valid values are U9A, U9B, U11A, U11B1, U11B2, U13A, U13B1, U13B2, U15A, U15B1, U15B2 and U17A';

    try {
      leagueValidator("U1A");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U1B1");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U19A");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U19B1");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

  });

  it ('should throw an error stating the division is invalid', function() {

    var errorText = 'League name is incorrect. ' +
      'Valid values are U9A, U9B, U11A, U11B1, U11B2, U13A, U13B1, U13B2, U15A, U15B1, U15B2 and U17A';

    try {
      leagueValidator("U9C");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U9B1");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U11C");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U11B3");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U17C");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }

    try {
      leagueValidator("U17B1");
    }
    catch(error) {
      expect(error).to.be(errorText);
    }
  });

});