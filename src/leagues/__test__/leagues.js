/**
 * Created by graeme on 15/10/2016.
 */
var expect = require('expect.js');
var league;

describe('Setting up the leagues', function () {

  beforeEach(function() {
    // load a fresh version of entries
    league = require('../leagues');
  });

  afterEach(function() {
    // unload the entries module
    delete require.cache[require.resolve('../leagues')];
  });


  it ('should return an empty list of teams in the team list for a league', function() {

    //league.printLeagues();

    var teams = league.getTeamList('U15A');
    expect(teams).to.be.empty();

    teams = league.getTeamList('u9b');
    expect(teams).to.be.empty();

    teams = league.getTeamList('undefinedLeague');
    expect(teams).to.be.empty();
  });

  it ('should add a team to the team list', function() {
    league.addTeamToLeague('U9A', 'The Team1');
    league.addTeamToLeague('U9B', 'The Team1');
    league.addTeamToLeague('U11A', 'The Team1');
    league.addTeamToLeague('U11B1', 'The Team1');
    league.addTeamToLeague('U11B2', 'The Team1');
    league.addTeamToLeague('U11G', 'The Team1');
    league.addTeamToLeague('U13A', 'The Team1');
    league.addTeamToLeague('U13B1', 'The Team1');
    league.addTeamToLeague('U13B2', 'The Team1');
    league.addTeamToLeague('U13G', 'The Team1');
    league.addTeamToLeague('U15A', 'The Team1');
    league.addTeamToLeague('U15B1', 'The Team1');
    league.addTeamToLeague('U15B2', 'The Team1');
    league.addTeamToLeague('U15G', 'The Team1');
    league.addTeamToLeague('U17', 'The Team1');

    var teams = league.getTeamList('U9A');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U9B');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U11A');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U11B1');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U11B2');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U11G');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U13A');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U13B1');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U13B2');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U13G');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U15A');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U15B1');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U15B2');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U15G');
    expect(teams).to.contain('The Team1');
    teams = league.getTeamList('U17');
    expect(teams).to.contain('The Team1');

  });

  it ('should add the teams to the leagues', function() {

    league.addTeamToLeague('U9A', 'The Team1');
    league.addTeamToLeague('U9B', 'The Team1');
    league.addTeamToLeague('U11A', 'The Team1');
    league.addTeamToLeague('U11B1', 'The Team1');
    league.addTeamToLeague('U11B2', 'The Team1');
    league.addTeamToLeague('U11G', 'The Team1');
    league.addTeamToLeague('U13A', 'The Team1');
    league.addTeamToLeague('U13B1', 'The Team1');
    league.addTeamToLeague('U13B2', 'The Team1');
    league.addTeamToLeague('U13G', 'The Team1');
    league.addTeamToLeague('U15A', 'The Team1');
    league.addTeamToLeague('U15B1', 'The Team1');
    league.addTeamToLeague('U15B2', 'The Team1');
    league.addTeamToLeague('U15G', 'The Team1');
    league.addTeamToLeague('U17', 'The Team1');

    league.addTeamToLeague('U9A', 'The Team1', 'B');
    league.addTeamToLeague('U9B', 'The Team2');
    league.addTeamToLeague('U11A', 'The Team2');
    league.addTeamToLeague('U11B1', 'The Team2', 'B');
    league.addTeamToLeague('U11B2', 'The Team2');
    league.addTeamToLeague('U11G', 'The Team2');
    league.addTeamToLeague('U13A', 'The Team2');
    league.addTeamToLeague('U13B1', 'The Team2');
    league.addTeamToLeague('U13B2', 'The Team2');
    league.addTeamToLeague('U13G', 'The Team2');
    league.addTeamToLeague('U15A', 'The Team2');
    league.addTeamToLeague('U15B1', 'The Team2');
    league.addTeamToLeague('U15B2', 'The Team2');
    league.addTeamToLeague('U15G', 'The Team2');
    league.addTeamToLeague('U17', 'The Team2');

    var teams = league.getTeamList('U9A');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team1 B');

    teams = league.getTeamList('U9B');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U11A');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U11B1');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2 B');

    teams = league.getTeamList('U11B2');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U11G');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U13A');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U13B1');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U13B2');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U13G');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U15A');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U15B1');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U15B2');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U15G');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

    teams = league.getTeamList('U17');
    expect(teams.length).to.be(2);
    expect(teams).to.be.an('array');
    expect(teams).to.contain('The Team1');
    expect(teams).to.contain('The Team2');

  });

  it ('should get a list of teams for club1', function() {
    league.addTeamToLeague('U9B', 'IBM Hursley');
    league.addTeamToLeague('U11A', 'IBM Hursley', 'A');
    league.addTeamToLeague('U11B2', 'IBM Hursley', 'B');
    league.addTeamToLeague('U11B2', 'IBM Hursley', 'C');
    league.addTeamToLeague('U13B2', 'IBM Hursley');
    league.addTeamToLeague('U15B2', 'IBM Hursley');

    var teams = league.getClubTeams('IBM Hursley');

    expect(teams).to.have.property('U9B');
    expect(teams.U9B).to.contain('IBM Hursley');

    expect(teams).to.have.property('U11A');
    expect(teams.U11A).to.contain('IBM Hursley A');

    expect(teams).to.have.property('U11B2');
    expect(teams.U11B2).to.contain('IBM Hursley C');
    expect(teams.U11B2).to.contain('IBM Hursley B');

    expect(teams).to.have.property('U13B2');
    expect(teams.U13B2).to.contain('IBM Hursley');

    expect(teams).to.have.property('U15B2');
    expect(teams.U15B2).to.contain('IBM Hursley');
  });
});
