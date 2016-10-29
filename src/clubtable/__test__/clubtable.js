var expect = require('expect.js');

beforeEach(function() {
  clubtable = require('../clubtable');
});

afterEach(function() {
  delete require.cache[require.resolve('../clubtable')];
});

describe('Populate the club table', function() {

  it('Should return a single club with 1 entry in 1 league', function() {
    var updateTable = clubtable.addTeam('club', 'league1', 'team', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club');
    expect(updateTable.club).to.be.an('object');
    expect(updateTable.club).to.only.have.keys('league1');
    expect(updateTable.club.league1).to.be.an('object');
    expect(updateTable.club.league1).to.only.have.keys('team');
    expect(updateTable.club.league1.team).to.be.an('object');
    expect(updateTable.club.league1.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league1.team.matchday).to.be.a('string');
    expect(updateTable.club.league1.team.matchday).to.have.length(0);
    expect(updateTable.club.league1.team.alternateWith).to.be.an('object');
    expect(updateTable.club.league1.team.alternateWith).to.be.empty();

  });

  it('Should return a single club with 2 entries in 1 league', function() {
    clubtable.addTeam('club', 'league1', 'team1', '');
    var updateTable = clubtable.addTeam('club', 'league1', 'team2', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club');
    expect(updateTable.club).to.be.an('object');
    expect(updateTable.club).to.only.have.keys('league1');
    expect(updateTable.club.league1).to.be.an('object');
    expect(updateTable.club.league1).to.only.have.keys('team1', 'team2');
    expect(updateTable.club.league1.team1).to.be.an('object');
    expect(updateTable.club.league1.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league1.team1.matchday).to.be.a('string');
    expect(updateTable.club.league1.team1.matchday).to.have.length(0);
    expect(updateTable.club.league1.team1.alternateWith).to.be.an('object');
    expect(updateTable.club.league1.team1.alternateWith).to.be.empty();
    expect(updateTable.club.league1.team2).to.be.an('object');
    expect(updateTable.club.league1.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league1.team2.matchday).to.be.a('string');
    expect(updateTable.club.league1.team2.matchday).to.have.length(0);
    expect(updateTable.club.league1.team2.alternateWith).to.be.an('object');
    expect(updateTable.club.league1.team2.alternateWith).to.be.empty();

  });

  it('Should return a single club with 1 entry in each of 2 leagues', function() {
    clubtable.addTeam('club', 'league1', 'team', '');
    var updateTable = clubtable.addTeam('club', 'league2', 'team', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club');
    expect(updateTable.club).to.be.an('object');
    expect(updateTable.club).to.only.have.keys('league1', 'league2');
    expect(updateTable.club.league1).to.be.an('object');
    expect(updateTable.club.league1).to.only.have.keys('team');
    expect(updateTable.club.league1.team).to.be.an('object');
    expect(updateTable.club.league1.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league1.team.matchday).to.be.a('string');
    expect(updateTable.club.league1.team.matchday).to.have.length(0);
    expect(updateTable.club.league1.team.alternateWith).to.be.an('object');
    expect(updateTable.club.league1.team.alternateWith).to.be.empty();
    expect(updateTable.club.league2).to.be.an('object');
    expect(updateTable.club.league2).to.only.have.keys('team');
    expect(updateTable.club.league2.team).to.be.an('object');
    expect(updateTable.club.league2.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league2.team.matchday).to.be.a('string');
    expect(updateTable.club.league2.team.matchday).to.have.length(0);
    expect(updateTable.club.league2.team.alternateWith).to.be.an('object');
    expect(updateTable.club.league2.team.alternateWith).to.be.empty();

  });

  it('Should return a single club with 2 entries in each of 2 leagues', function() {
    clubtable.addTeam('club', 'league1', 'team1', '');
    clubtable.addTeam('club', 'league1', 'team2', '');
    clubtable.addTeam('club', 'league2', 'team1', '');
    var updateTable = clubtable.addTeam('club', 'league2', 'team2', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club');
    expect(updateTable.club).to.be.an('object');
    expect(updateTable.club).to.only.have.keys('league1', 'league2');
    expect(updateTable.club.league1).to.be.an('object');
    expect(updateTable.club.league1).to.only.have.keys('team1', 'team2');
    expect(updateTable.club.league1.team1).to.be.an('object');
    expect(updateTable.club.league1.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league1.team1.matchday).to.be.a('string');
    expect(updateTable.club.league1.team1.matchday).to.have.length(0);
    expect(updateTable.club.league1.team1.alternateWith).to.be.an('object');
    expect(updateTable.club.league1.team1.alternateWith).to.be.empty();
    expect(updateTable.club.league1.team2).to.be.an('object');
    expect(updateTable.club.league1.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league1.team2.matchday).to.be.a('string');
    expect(updateTable.club.league1.team2.matchday).to.have.length(0);
    expect(updateTable.club.league1.team2.alternateWith).to.be.an('object');
    expect(updateTable.club.league1.team2.alternateWith).to.be.empty();
    expect(updateTable.club.league2).to.be.an('object');
    expect(updateTable.club.league2).to.only.have.keys('team1', 'team2');
    expect(updateTable.club.league2.team1).to.be.an('object');
    expect(updateTable.club.league2.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league2.team1.matchday).to.be.a('string');
    expect(updateTable.club.league2.team1.matchday).to.have.length(0);
    expect(updateTable.club.league2.team1.alternateWith).to.be.an('object');
    expect(updateTable.club.league2.team1.alternateWith).to.be.empty();
    expect(updateTable.club.league2.team2).to.be.an('object');
    expect(updateTable.club.league2.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club.league2.team2.matchday).to.be.a('string');
    expect(updateTable.club.league2.team2.matchday).to.have.length(0);
    expect(updateTable.club.league2.team2.alternateWith).to.be.an('object');
    expect(updateTable.club.league2.team2.alternateWith).to.be.empty();

  });

  it('Should return two clubs with 1 entry in 1 league', function() {
    clubtable.addTeam('club1', 'league1', 'team', '');
    var updateTable = clubtable.addTeam('club2', 'league1', 'team', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club1', 'club2');
    expect(updateTable.club1).to.be.an('object');
    expect(updateTable.club1).to.only.have.keys('league1');
    expect(updateTable.club1.league1).to.be.an('object');
    expect(updateTable.club1.league1).to.only.have.keys('team');
    expect(updateTable.club1.league1.team).to.be.an('object');
    expect(updateTable.club1.league1.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league1.team.matchday).to.be.a('string');
    expect(updateTable.club1.league1.team.matchday).to.have.length(0);
    expect(updateTable.club1.league1.team.alternateWith).to.be.an('object');
    expect(updateTable.club1.league1.team.alternateWith).to.be.empty();

    expect(updateTable.club2).to.be.an('object');
    expect(updateTable.club2).to.only.have.keys('league1');
    expect(updateTable.club2.league1).to.be.an('object');
    expect(updateTable.club2.league1).to.only.have.keys('team');
    expect(updateTable.club2.league1.team).to.be.an('object');
    expect(updateTable.club2.league1.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league1.team.matchday).to.be.a('string');
    expect(updateTable.club2.league1.team.matchday).to.have.length(0);
    expect(updateTable.club2.league1.team.alternateWith).to.be.an('object');
    expect(updateTable.club2.league1.team.alternateWith).to.be.empty();

  });

  it('Should return two clubs with 2 entries in 1 league', function() {
    clubtable.addTeam('club1', 'league1', 'team1', '');
    clubtable.addTeam('club1', 'league1', 'team2', '');
    clubtable.addTeam('club2', 'league1', 'team1', '');
    var updateTable = clubtable.addTeam('club2', 'league1', 'team2', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club1', 'club2');
    expect(updateTable.club1).to.be.an('object');
    expect(updateTable.club1).to.only.have.keys('league1');
    expect(updateTable.club1.league1).to.be.an('object');
    expect(updateTable.club1.league1).to.only.have.keys('team1', 'team2');
    expect(updateTable.club1.league1.team1).to.be.an('object');
    expect(updateTable.club1.league1.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league1.team1.matchday).to.be.a('string');
    expect(updateTable.club1.league1.team1.matchday).to.have.length(0);
    expect(updateTable.club1.league1.team1.alternateWith).to.be.an('object');
    expect(updateTable.club1.league1.team1.alternateWith).to.be.empty();
    expect(updateTable.club1.league1.team2).to.be.an('object');
    expect(updateTable.club1.league1.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league1.team2.matchday).to.be.a('string');
    expect(updateTable.club1.league1.team2.matchday).to.have.length(0);
    expect(updateTable.club1.league1.team2.alternateWith).to.be.an('object');
    expect(updateTable.club1.league1.team2.alternateWith).to.be.empty();

    expect(updateTable.club2).to.be.an('object');
    expect(updateTable.club2).to.only.have.keys('league1');
    expect(updateTable.club2.league1).to.be.an('object');
    expect(updateTable.club2.league1).to.only.have.keys('team1', 'team2');
    expect(updateTable.club2.league1.team1).to.be.an('object');
    expect(updateTable.club2.league1.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league1.team1.matchday).to.be.a('string');
    expect(updateTable.club2.league1.team1.matchday).to.have.length(0);
    expect(updateTable.club2.league1.team1.alternateWith).to.be.an('object');
    expect(updateTable.club2.league1.team1.alternateWith).to.be.empty();
    expect(updateTable.club2.league1.team2).to.be.an('object');
    expect(updateTable.club2.league1.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league1.team2.matchday).to.be.a('string');
    expect(updateTable.club2.league1.team2.matchday).to.have.length(0);
    expect(updateTable.club2.league1.team2.alternateWith).to.be.an('object');
    expect(updateTable.club2.league1.team2.alternateWith).to.be.empty();

  });

  it('Should return a single club with 1 entry in each of 2 leagues', function() {
    clubtable.addTeam('club1', 'league1', 'team', '');
    clubtable.addTeam('club1', 'league2', 'team', '');
    clubtable.addTeam('club2', 'league1', 'team', '');
    var updateTable = clubtable.addTeam('club2', 'league2', 'team', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club1', 'club2');
    expect(updateTable.club1).to.be.an('object');
    expect(updateTable.club1).to.only.have.keys('league1', 'league2');
    expect(updateTable.club1.league1).to.be.an('object');
    expect(updateTable.club1.league1).to.only.have.keys('team');
    expect(updateTable.club1.league1.team).to.be.an('object');
    expect(updateTable.club1.league1.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league1.team.matchday).to.be.a('string');
    expect(updateTable.club1.league1.team.matchday).to.have.length(0);
    expect(updateTable.club1.league1.team.alternateWith).to.be.an('object');
    expect(updateTable.club1.league1.team.alternateWith).to.be.empty();
    expect(updateTable.club1.league2).to.be.an('object');
    expect(updateTable.club1.league2).to.only.have.keys('team');
    expect(updateTable.club1.league2.team).to.be.an('object');
    expect(updateTable.club1.league2.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league2.team.matchday).to.be.a('string');
    expect(updateTable.club1.league2.team.matchday).to.have.length(0);
    expect(updateTable.club1.league2.team.alternateWith).to.be.an('object');
    expect(updateTable.club1.league2.team.alternateWith).to.be.empty();

    expect(updateTable.club2).to.be.an('object');
    expect(updateTable.club2).to.only.have.keys('league1', 'league2');
    expect(updateTable.club2.league1).to.be.an('object');
    expect(updateTable.club2.league1).to.only.have.keys('team');
    expect(updateTable.club2.league1.team).to.be.an('object');
    expect(updateTable.club2.league1.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league1.team.matchday).to.be.a('string');
    expect(updateTable.club2.league1.team.matchday).to.have.length(0);
    expect(updateTable.club2.league1.team.alternateWith).to.be.an('object');
    expect(updateTable.club2.league1.team.alternateWith).to.be.empty();
    expect(updateTable.club2.league2).to.be.an('object');
    expect(updateTable.club2.league2).to.only.have.keys('team');
    expect(updateTable.club2.league2.team).to.be.an('object');
    expect(updateTable.club2.league2.team).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league2.team.matchday).to.be.a('string');
    expect(updateTable.club2.league2.team.matchday).to.have.length(0);
    expect(updateTable.club2.league2.team.alternateWith).to.be.an('object');
    expect(updateTable.club2.league2.team.alternateWith).to.be.empty();

  });

  it('Should return a single club with 2 entries in each of 2 leagues', function() {
    clubtable.addTeam('club1', 'league1', 'team1', '');
    clubtable.addTeam('club1', 'league1', 'team2', '');
    clubtable.addTeam('club1', 'league2', 'team1', '');
    clubtable.addTeam('club1', 'league2', 'team2', '');
    clubtable.addTeam('club2', 'league1', 'team1', '');
    clubtable.addTeam('club2', 'league1', 'team2', '');
    clubtable.addTeam('club2', 'league2', 'team1', '');
    var updateTable = clubtable.addTeam('club2', 'league2', 'team2', '');

    expect(updateTable).to.be.an('object');
    expect(updateTable).to.only.have.keys('club1', 'club2');
    expect(updateTable.club1).to.be.an('object');
    expect(updateTable.club1).to.only.have.keys('league1', 'league2');
    expect(updateTable.club1.league1).to.be.an('object');
    expect(updateTable.club1.league1).to.only.have.keys('team1', 'team2');
    expect(updateTable.club1.league1.team1).to.be.an('object');
    expect(updateTable.club1.league1.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league1.team1.matchday).to.be.a('string');
    expect(updateTable.club1.league1.team1.matchday).to.have.length(0);
    expect(updateTable.club1.league1.team1.alternateWith).to.be.an('object');
    expect(updateTable.club1.league1.team1.alternateWith).to.be.empty();
    expect(updateTable.club1.league1.team2).to.be.an('object');
    expect(updateTable.club1.league1.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league1.team2.matchday).to.be.a('string');
    expect(updateTable.club1.league1.team2.matchday).to.have.length(0);
    expect(updateTable.club1.league1.team2.alternateWith).to.be.an('object');
    expect(updateTable.club1.league1.team2.alternateWith).to.be.empty();
    expect(updateTable.club1.league2).to.be.an('object');
    expect(updateTable.club1.league2).to.only.have.keys('team1', 'team2');
    expect(updateTable.club1.league2.team1).to.be.an('object');
    expect(updateTable.club1.league2.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league2.team1.matchday).to.be.a('string');
    expect(updateTable.club1.league2.team1.matchday).to.have.length(0);
    expect(updateTable.club1.league2.team1.alternateWith).to.be.an('object');
    expect(updateTable.club1.league2.team1.alternateWith).to.be.empty();
    expect(updateTable.club1.league2.team2).to.be.an('object');
    expect(updateTable.club1.league2.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club1.league2.team2.matchday).to.be.a('string');
    expect(updateTable.club1.league2.team2.matchday).to.have.length(0);
    expect(updateTable.club1.league2.team2.alternateWith).to.be.an('object');
    expect(updateTable.club1.league2.team2.alternateWith).to.be.empty();

    expect(updateTable.club2).to.be.an('object');
    expect(updateTable.club2).to.only.have.keys('league1', 'league2');
    expect(updateTable.club2.league1).to.be.an('object');
    expect(updateTable.club2.league1).to.only.have.keys('team1', 'team2');
    expect(updateTable.club2.league1.team1).to.be.an('object');
    expect(updateTable.club2.league1.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league1.team1.matchday).to.be.a('string');
    expect(updateTable.club2.league1.team1.matchday).to.have.length(0);
    expect(updateTable.club2.league1.team1.alternateWith).to.be.an('object');
    expect(updateTable.club2.league1.team1.alternateWith).to.be.empty();
    expect(updateTable.club2.league1.team2).to.be.an('object');
    expect(updateTable.club2.league1.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league1.team2.matchday).to.be.a('string');
    expect(updateTable.club2.league1.team2.matchday).to.have.length(0);
    expect(updateTable.club2.league1.team2.alternateWith).to.be.an('object');
    expect(updateTable.club2.league1.team2.alternateWith).to.be.empty();
    expect(updateTable.club2.league2).to.be.an('object');
    expect(updateTable.club2.league2).to.only.have.keys('team1', 'team2');
    expect(updateTable.club2.league2.team1).to.be.an('object');
    expect(updateTable.club2.league2.team1).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league2.team1.matchday).to.be.a('string');
    expect(updateTable.club2.league2.team1.matchday).to.have.length(0);
    expect(updateTable.club2.league2.team1.alternateWith).to.be.an('object');
    expect(updateTable.club2.league2.team1.alternateWith).to.be.empty();
    expect(updateTable.club2.league2.team2).to.be.an('object');
    expect(updateTable.club2.league2.team2).to.only.have.keys('matchday', 'alternateWith');
    expect(updateTable.club2.league2.team2.matchday).to.be.a('string');
    expect(updateTable.club2.league2.team2.matchday).to.have.length(0);
    expect(updateTable.club2.league2.team2.alternateWith).to.be.an('object');
    expect(updateTable.club2.league2.team2.alternateWith).to.be.empty();
  });

});