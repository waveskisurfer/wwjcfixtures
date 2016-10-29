var _ = require('lodash');
var entrySet = require('../resources/entries.json');
var bLeagueTeams = require('../resources/b-league-teams.json');
var entries = require('./entries/entries');
var clubtable = require('./clubtable/clubtable');
var leagueValidator = require('./utils/leagueNameValidator');

_.forEach(bLeagueTeams, function(teams, leagueName) {
  var league = leagueValidator(leagueName);

  teams.forEach(function(element) {
    entries.addBLeagueTeam(element, league.ageGroup, league.division);
  });
});

var table = {};

entrySet.forEach(function(entryForm) {
  var fullset = entries.processEntryForm(entryForm);

  fullset.forEach(function(entry) {
    table = clubtable.addTeam(entry.club, entry.league, entry.team, entry.matchday);
  });

});

console.log(JSON.stringify(table));
