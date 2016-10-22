var expect = require('expect.js');
var entries;

beforeEach(function() {
  // load a fresh version of entries
  entries = require('../entries');
});

afterEach(function() {
  // unload the entries module
  delete require.cache[require.resolve('../entries')];
});

describe('Setting of B league teams', function() {

  it ('should add a team to the U11 age group', function() {
    var teams = entries.addBLeagueTeam('club1', 'U11', 'B1');
    expect(teams).to.be.an('object');
    expect(teams).to.have.property('club1');
    expect(teams.club1).to.be.an('array');
    expect(teams.club1).to.have.length(1);
    expect(teams.club1).to.contain('B1');
    expect(teams).to.only.have.key('club1');

    teams = entries.addBLeagueTeam('club2', 'U11', 'C');
    expect(teams).to.be.an('object');
    expect(teams).to.have.property('club1');
    expect(teams.club1).to.be.an('array');
    expect(teams.club1).to.have.length(1);
    expect(teams.club1).to.contain('B1');
    expect(teams).to.have.property('club2');
    expect(teams.club2).to.be.an('array');
    expect(teams.club2).to.have.length(1);
    expect(teams.club2).to.contain('C');
    expect(teams).to.only.have.key('club1', 'club2');
  });

  it ('should add a team to the U13 age group', function() {
    var teams = entries.addBLeagueTeam('club1', 'U13', 'B1');
    expect(teams).to.be.an('object');
    expect(teams).to.have.property('club1');
    expect(teams.club1).to.be.an('array');
    expect(teams.club1).to.have.length(1);
    expect(teams.club1).to.contain('B1');
    expect(teams).to.only.have.key('club1');

    teams = entries.addBLeagueTeam('club2', 'U13', 'C');
    expect(teams).to.be.an('object');
    expect(teams).to.have.property('club1');
    expect(teams.club1).to.be.an('array');
    expect(teams.club1).to.have.length(1);
    expect(teams.club1).to.contain('B1');
    expect(teams).to.have.property('club2');
    expect(teams.club2).to.be.an('array');
    expect(teams.club2).to.have.length(1);
    expect(teams.club2).to.contain('C');
    expect(teams).to.only.have.key('club1', 'club2');
  });

  it ('should add a team to the U15 age group', function() {
    var teams = entries.addBLeagueTeam('club1', 'U15', 'B1');
    expect(teams).to.be.an('object');
    expect(teams).to.have.property('club1');
    expect(teams.club1).to.be.an('array');
    expect(teams.club1).to.have.length(1);
    expect(teams.club1).to.contain('B1');

    teams = entries.addBLeagueTeam('club2', 'U15', 'C');
    expect(teams).to.be.an('object');
    expect(teams).to.have.property('club1');
    expect(teams.club1).to.be.an('array');
    expect(teams.club1).to.have.length(1);
    expect(teams.club1).to.contain('B1');
    expect(teams).to.have.property('club2');
    expect(teams.club2).to.be.an('array');
    expect(teams.club2).to.have.length(1);
    expect(teams.club2).to.contain('C');
    expect(teams).to.only.have.key('club1', 'club2');
  });

  it ('should add a team to the U11 and U13 age groups', function() {
    var u11teams = entries.addBLeagueTeam('club1', 'U11', 'B1');
    var u13teams = entries.addBLeagueTeam('club2', 'U13', 'C');
    expect(u11teams).to.be.an('object');
    expect(u11teams).to.have.property('club1');
    expect(u11teams.club1).to.be.an('array');
    expect(u11teams.club1).to.have.length(1);
    expect(u11teams.club1).to.contain('B1');
    expect(u11teams).to.only.have.key('club1');
    expect(u13teams).to.be.an('object');
    expect(u13teams).to.have.property('club2');
    expect(u13teams.club2).to.be.an('array');
    expect(u13teams.club2).to.have.length(1);
    expect(u13teams.club2).to.contain('C');
    expect(u13teams).to.only.have.key('club2');
  });

  it ('should add a team to the U11, U13 and U15 age groups', function() {
    var u11teams = entries.addBLeagueTeam('club1', 'U11', 'B1');
    var u13teams = entries.addBLeagueTeam('club2', 'U13', 'C');
    var u15teams = entries.addBLeagueTeam('club1', 'U15', 'C');
    expect(u11teams).to.be.an('object');
    expect(u11teams).to.have.property('club1');
    expect(u11teams.club1).to.be.an('array');
    expect(u11teams.club1).to.have.length(1);
    expect(u11teams.club1).to.contain('B1');
    expect(u11teams).to.only.have.key('club1');
    expect(u13teams).to.be.an('object');
    expect(u13teams).to.have.property('club2');
    expect(u13teams.club2).to.be.an('array');
    expect(u13teams.club2).to.have.length(1);
    expect(u13teams.club2).to.contain('C');
    expect(u13teams).to.only.have.key('club2');
    expect(u15teams).to.be.an('object');
    expect(u15teams).to.have.property('club1');
    expect(u15teams.club1).to.be.an('array');
    expect(u15teams.club1).to.have.length(1);
    expect(u15teams.club1).to.contain('C');
    expect(u15teams).to.only.have.key('club1');
  });

  it ('should add teams from a club to multiple division in the same age group', function() {
    entries.addBLeagueTeam('club1', 'U11', 'B1');
    var u11teams = entries.addBLeagueTeam('club1', 'U11', 'B2');
    expect(u11teams).to.be.an('object');
    expect(u11teams).to.have.property('club1');
    expect(u11teams.club1).to.be.an('array');
    expect(u11teams.club1).to.have.length(2);
    expect(u11teams.club1).to.contain('B1');
    expect(u11teams.club1).to.contain('B2');
    expect(u11teams).to.only.have.key('club1');
  });

  it ('should fail to add a team to an invalid age group', function() {
    try {
      entries.addBLeagueTeam('club1', 'invalid', 'B1');
    }
    catch(error) {
      expect(error).to.be('Age group invalid invalid. Must be one of U9, U11, U13, U15 or U17.');
    }
  });

});

describe('Retrieval of B league divisions', function() {

  it('should retrieve the correct division for teams', function() {
    entries.addBLeagueTeam('club1', 'U11', 'B1');
    entries.addBLeagueTeam('club2', 'U13', 'C');
    entries.addBLeagueTeam('club1', 'U15', 'C');

    expect(entries.getTeamBDivision('club1', 'U9')).to.be.an('array');
    expect(entries.getTeamBDivision('club1', 'U9')).to.contain('B');
    expect(entries.getTeamBDivision('club1', 'U9')).to.have.length(1);

    expect(entries.getTeamBDivision('club1', 'U11')).to.be.an('array');
    expect(entries.getTeamBDivision('club1', 'U11')).to.contain('B1');
    expect(entries.getTeamBDivision('club1', 'U11')).to.have.length(1);

    expect(entries.getTeamBDivision('club2', 'U13')).to.be.an('array');
    expect(entries.getTeamBDivision('club2', 'U13')).to.contain('C');
    expect(entries.getTeamBDivision('club2', 'U13')).to.have.length(1);

    expect(entries.getTeamBDivision('club1', 'U15')).to.be.an('array');
    expect(entries.getTeamBDivision('club1', 'U15')).to.contain('C');
    expect(entries.getTeamBDivision('club1', 'U15')).to.have.length(1);

    expect(entries.getTeamBDivision('club1', 'U17')).to.be.empty();

    expect(entries.getTeamBDivision('club3', 'U11')).to.be.empty();
  });

  it ('should fail with an invalid age group', function() {
    entries.addBLeagueTeam('club1', 'U11', 'B1');

    try {
      entries.getTeamBDivision('club1', 'U26');
    }
    catch(error) {
      expect(error).to.be('Age group U26 invalid. Must be one of U9, U11, U13, U15 or U17.');
    }

  });

});

describe('Splitting the girls entries from the boys entries', function() {

  it('should return all the boys entries and only the boys entries', function() {
    var entryList = {
      A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
      B: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
      G: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
    };

    var boysEntries = entries.splitAgeGroupEntries(entryList, 'boys');

    expect(boysEntries).to.be.an('object');
    expect(boysEntries).to.have.property('A');
    expect(boysEntries.A).to.eql({ numberOfTeams: 0, usualMatchDay: "Sunday" });
    expect(boysEntries).to.have.property('B');
    expect(boysEntries.B).to.be.eql({ numberOfTeams:1, usualMatchDay:'Sunday'});
    expect(boysEntries).to.only.have.key('A', 'B');
  });

  it('should return no boys entries', function() {
    var entryList = {
      G: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
    };

    var boysEntries = entries.splitAgeGroupEntries(entryList, 'boys');

    expect(boysEntries).to.be.an('object');
    expect(boysEntries).to.be.empty();
  });

  it('should return all the girls entries and only the girls entries', function() {
    var entryList = {
      A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
      B: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
      G: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
    };

    var girlsEntries = entries.splitAgeGroupEntries(entryList, 'girls');

    expect(girlsEntries).to.be.an('object');
    expect(girlsEntries).to.have.property('G');
    expect(girlsEntries.G).to.eql({ numberOfTeams: 0, usualMatchDay: "Sunday" });
    expect(girlsEntries).to.only.have.key('G');


  });

  it('should return no girls entries', function() {
    var entryList = {
      A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
      B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
    };

    var girlsEntries = entries.splitAgeGroupEntries(entryList, 'girls');

    expect(girlsEntries).to.be.an('object');
    expect(girlsEntries).to.be.empty();
  });

  it('should return no entries', function() {
    var entryList = {};

    var boysEntries = entries.splitAgeGroupEntries(entryList, 'boys');
    var girlsEntries = entries.splitAgeGroupEntries(entryList, 'girls');

    expect(boysEntries).to.be.an('object');
    expect(boysEntries).to.be.empty();
    expect(girlsEntries).to.be.an('object');
    expect(girlsEntries).to.be.empty();
  });

  it('should fail with an invalid gender', function() {
    var entryList = {
      A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
      B: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
      G: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
    };

    try {
      entries.splitAgeGroupEntries(entryList, 'invalidGender');
    }
    catch(error) {
      expect(error).to.be('The gender invalidGender is invalid. It should either be boys or girls.');
    }
  });

});

describe('Retrieval of the team list for a league', function() {

  describe('Single team in a division', function() {

    it('should return a single team in the U9A division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

    it('should return a single team in the U9B division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9B');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

    it('should return a single team in the U11A division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

    it('should return a single team in the U11B division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

    it('should return a single team in the U17 division', function() {

      var ageGroupEntries = { numberOfTeams: 1, usualMatchDay: 'Friday' };

      var ageGroupList = entries.getAgeGroupList('club1', 'U17', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U17');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

    it('should return a single team in the girls division', function() {

      var ageGroupEntries = {
        G: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11G');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

  });

  describe('Two teams in a same division', function() {

    it('should return two teams in the U9A division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 2, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U9A');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return two teams in the U9B division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9B');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U9B');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return two teams in the U11A division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 2, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11A');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return two teams in the same U11B division', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B2');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return two teams in different U11B divisions', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return two teams in the U17 division', function() {

      var ageGroupEntries = { numberOfTeams: 2, usualMatchDay: 'Friday' };

      var ageGroupList = entries.getAgeGroupList('club1', 'U17', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U17');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U17');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return two teams in the girls division', function() {

      var ageGroupEntries = {
        G: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11G');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11G');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

  });

  describe('Two teams in different divisions', function() {

    it('should return one U9A division team and one U9B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U9B');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return one U11A division team and one U11B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B1');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return one U13A division team and one U13B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U13', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U13', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U13A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U13B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return one U15A division team and one U15B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U15', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U15', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U15A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U15B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

  });

  describe('Two teams in A division and one team in B division', function() {

    it('should return two U9A division teams and one U9B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 2, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U9A');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U9B');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return two U11A division teams and one U11B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 2, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11A');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B1');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return two U13A division teams and one U13B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 2, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U13', 'B1');
      var ageGroupList = entries.getAgeGroupList('club1', 'U13', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U13A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U13A');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U13B1');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return two U15A division teams and one U15B division team', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 2, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U15', 'B1');
      var ageGroupList = entries.getAgeGroupList('club1', 'U15', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U15A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U15A');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U15B1');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

  });

  describe('One team in A division and two teams in B division', function() {

    it('should return one U9A division team and two U9B division teams', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      var ageGroupList = entries.getAgeGroupList('club1', 'U9', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U9A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U9B');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U9B');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return one U11A division team and two U11B division teams', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B2');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return one U13A division team and two U13B division teams', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U13', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U13', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U13A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U13B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U13B2');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return one U15A division team and two U15B division teams', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 1, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U15', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U15', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U15A');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U15B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U15B2');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

  });

  describe('Multiple teams in B division', function() {

    it('should return 1 teams in U11B1 and 0 team in U11B2', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 1, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(1);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('');

    });

    it('should return 1 teams in U11B1 and 1 team in U11B2', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');

    });

    it('should return 2 teams in U11B1 and 1 team in U11B2', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 3, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B1');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');

    });

    it('should return 2 teams in U11B1 and 2 team in U11B2', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 4, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(4);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B1');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');
      expect(ageGroupList[3]).to.be.an('object');
      expect(ageGroupList[3]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[3].league).to.be('U11B2');
      expect(ageGroupList[3].club).to.be('club1');
      expect(ageGroupList[3].team).to.be('D');

    });

    it('should return 1 teams in U11B1, 1 team in U11B2 and 0 team in U11B3', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 2, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      entries.addBLeagueTeam('club1', 'U11', 'B3');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(2);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');


    });

    it('should return 1 teams in U11B1, 1 team in U11B2 and 1 team in U11B3', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 3, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      entries.addBLeagueTeam('club1', 'U11', 'B3');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(3);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B3');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');
    });

    it('should return 2 teams in U11B1, 1 team in U11B2 and 1 team in U11B3', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 4, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      entries.addBLeagueTeam('club1', 'U11', 'B3');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(4);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B3');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');
      expect(ageGroupList[3]).to.be.an('object');
      expect(ageGroupList[3]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[3].league).to.be('U11B1');
      expect(ageGroupList[3].club).to.be('club1');
      expect(ageGroupList[3].team).to.be('D');

    });

    it('should return 2 teams in U11B1, 2 team in U11B2 and 1 team in U11B3', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 5, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      entries.addBLeagueTeam('club1', 'U11', 'B3');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(5);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B3');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');
      expect(ageGroupList[3]).to.be.an('object');
      expect(ageGroupList[3]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[3].league).to.be('U11B1');
      expect(ageGroupList[3].club).to.be('club1');
      expect(ageGroupList[3].team).to.be('D');
      expect(ageGroupList[4]).to.be.an('object');
      expect(ageGroupList[4]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[4].league).to.be('U11B2');
      expect(ageGroupList[4].club).to.be('club1');
      expect(ageGroupList[4].team).to.be('E');

    });

    it('should return 2 teams in U11B1, 2 team in U11B2 and 2 team in U11B3', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 6, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      entries.addBLeagueTeam('club1', 'U11', 'B3');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(6);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B3');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');
      expect(ageGroupList[3]).to.be.an('object');
      expect(ageGroupList[3]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[3].league).to.be('U11B1');
      expect(ageGroupList[3].club).to.be('club1');
      expect(ageGroupList[3].team).to.be('D');
      expect(ageGroupList[4]).to.be.an('object');
      expect(ageGroupList[4]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[4].league).to.be('U11B2');
      expect(ageGroupList[4].club).to.be('club1');
      expect(ageGroupList[4].team).to.be('E');
      expect(ageGroupList[5]).to.be.an('object');
      expect(ageGroupList[5]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[5].league).to.be('U11B3');
      expect(ageGroupList[5].club).to.be('club1');
      expect(ageGroupList[5].team).to.be('F');

    });

    it('should return 3 teams in U11B1, 2 team in U11B2 and 2 team in U11B3', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 0, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 7, usualMatchDay: 'Sunday' }
      };

      entries.addBLeagueTeam('club1', 'U11', 'B1');
      entries.addBLeagueTeam('club1', 'U11', 'B2');
      entries.addBLeagueTeam('club1', 'U11', 'B3');
      var ageGroupList = entries.getAgeGroupList('club1', 'U11', ageGroupEntries);

      expect(ageGroupList).to.be.an('array');
      expect(ageGroupList).to.have.length(7);
      expect(ageGroupList[0]).to.be.an('object');
      expect(ageGroupList[0]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[0].league).to.be('U11B1');
      expect(ageGroupList[0].club).to.be('club1');
      expect(ageGroupList[0].team).to.be('A');
      expect(ageGroupList[1]).to.be.an('object');
      expect(ageGroupList[1]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[1].league).to.be('U11B2');
      expect(ageGroupList[1].club).to.be('club1');
      expect(ageGroupList[1].team).to.be('B');
      expect(ageGroupList[2]).to.be.an('object');
      expect(ageGroupList[2]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[2].league).to.be('U11B3');
      expect(ageGroupList[2].club).to.be('club1');
      expect(ageGroupList[2].team).to.be('C');
      expect(ageGroupList[3]).to.be.an('object');
      expect(ageGroupList[3]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[3].league).to.be('U11B1');
      expect(ageGroupList[3].club).to.be('club1');
      expect(ageGroupList[3].team).to.be('D');
      expect(ageGroupList[4]).to.be.an('object');
      expect(ageGroupList[4]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[4].league).to.be('U11B2');
      expect(ageGroupList[4].club).to.be('club1');
      expect(ageGroupList[4].team).to.be('E');
      expect(ageGroupList[5]).to.be.an('object');
      expect(ageGroupList[5]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[5].league).to.be('U11B3');
      expect(ageGroupList[5].club).to.be('club1');
      expect(ageGroupList[5].team).to.be('F');
      expect(ageGroupList[6]).to.be.an('object');
      expect(ageGroupList[6]).to.only.have.keys('league', 'club', 'team');
      expect(ageGroupList[6].league).to.be('U11B1');
      expect(ageGroupList[6].club).to.be('club1');
      expect(ageGroupList[6].team).to.be('G');

    });

  });

  describe('Validate failure cases', function() {

    it('should fail with too many teams', function() {

      var ageGroupEntries = {
        A: { numberOfTeams: 27, usualMatchDay: 'Sunday' },
        B: { numberOfTeams: 0, usualMatchDay: 'Sunday' }
      };

      try {
        entries.getAgeGroupList('club1', 'U9', ageGroupEntries);
      }
      catch(error) {
        expect(error).to.be('Invalid number of teams. Value 27 should be a maximum of 26');
      }
    });

  });

});

describe('Processing of entry forms', function() {

  it('should return a complete list of teams in all age categories', function() {

    entries.addBLeagueTeam('Bishops Waltham', 'U11', 'B1');
    entries.addBLeagueTeam('Easton & MW', 'U11', 'B1');
    entries.addBLeagueTeam('Fair Oak', 'U11', 'B1');
    entries.addBLeagueTeam('Hedge End', 'U11', 'B1');
    entries.addBLeagueTeam('Trojans', 'U11', 'B1');
    entries.addBLeagueTeam('Ropley', 'U11', 'B1');
    entries.addBLeagueTeam('Sparsholt', 'U11', 'B1');
    entries.addBLeagueTeam('St Cross', 'U11', 'B1');
    entries.addBLeagueTeam('Tichborne Park', 'U11', 'B1');

    entries.addBLeagueTeam('Broughton', 'U11', 'B2');
    entries.addBLeagueTeam('St Cross', 'U11', 'B2');
    entries.addBLeagueTeam('Longparish', 'U11', 'B2');
    entries.addBLeagueTeam('IBM Hursley', 'U11', 'B2');
    entries.addBLeagueTeam('Andover', 'U11', 'B2');
    entries.addBLeagueTeam('Compton & CF', 'U11', 'B2');
    entries.addBLeagueTeam('Twyford', 'U11', 'B2');
    entries.addBLeagueTeam('Amport', 'U11', 'B2');
    entries.addBLeagueTeam('Wherwell', 'U11', 'B2');

    entries.addBLeagueTeam('Fair Oak', 'U13', 'B1');
    entries.addBLeagueTeam('Tichborne Park', 'U13', 'B1');
    entries.addBLeagueTeam('St Cross', 'U13', 'B1');
    entries.addBLeagueTeam('Hedge End', 'U13', 'B1');
    entries.addBLeagueTeam('Bishops Waltham', 'U13', 'B1');
    entries.addBLeagueTeam('Trojans', 'U13', 'B1');

    entries.addBLeagueTeam('Amport', 'U13', 'B2');
    entries.addBLeagueTeam('Twyford', 'U13', 'B2');
    entries.addBLeagueTeam('Compton & CF', 'U13', 'B2');
    entries.addBLeagueTeam('Andover', 'U13', 'B2');
    entries.addBLeagueTeam('IBM Hursley', 'U13', 'B2');
    entries.addBLeagueTeam('Longparish', 'U13', 'B2');

    entries.addBLeagueTeam('Fair Oak', 'U15', 'B1');
    entries.addBLeagueTeam('Easton & MW', 'U15', 'B1');
    entries.addBLeagueTeam('Ropley', 'U15', 'B1');
    entries.addBLeagueTeam('Hedge End', 'U15', 'B1');
    entries.addBLeagueTeam('Bishops Waltham', 'U15', 'B1');
    entries.addBLeagueTeam('Trojans', 'U15', 'B1');

    entries.addBLeagueTeam('Amport', 'U15', 'B2');
    entries.addBLeagueTeam('Sparsholt', 'U15', 'B2');
    entries.addBLeagueTeam('Hursley Park', 'U15', 'B2');
    entries.addBLeagueTeam('Andover', 'U15', 'B2');
    entries.addBLeagueTeam('IBM Hursley', 'U15', 'B2');
    entries.addBLeagueTeam('Longparish', 'U15', 'B2');
    entries.addBLeagueTeam('Otterbourne', 'U15', 'B2');

    var entrySet = require('../../../resources/entries.json');
    var leagues = require('../../leagues/leagues');

    entrySet.forEach(function(entryForm) {
      var fullset = entries.processEntryForm(entryForm);

      fullset.forEach(function(entry) {
        leagues.addTeamToLeague(entry.league, entry.club, entry.team);
      });

    });

    leagues.printLeagues();

    delete require.cache[require.resolve('../../leagues/leagues')];

  });

});
