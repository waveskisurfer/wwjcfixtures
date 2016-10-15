/**
 * Created by graeme on 15/10/2016.
 */
var _ = require('lodash');
var leagueValidator = require('../utils/leagueNameValidator');

module.exports = {
  getTeamList : getTeamList,
  addTeamToLeague : addTeamToLeague,
  getClubTeams :getClubTeams
};

var leagues = {
  U17: {
    A: []
  },
  U15: {
    A: [],
    B1: [],
    B2: []
  },
  U13: {
    A: [],
    B1: [],
    B2: []
  },
  U11: {
    A: [],
    B1: [],
    B2: []
  },
  U9: {
    A: [],
    B: []
  }
};

function getTeamList(league) {

  try {
    var validatedLeague = leagueValidator(league);
    return leagues[validatedLeague.ageGroup][validatedLeague.division]
      .map(function(element) {
        return element.club + (element.team ? ' ' + element.team : '');});
  }
  catch(error) {
    console.log(error);
    return [];
  }
}

function addTeamToLeague(league, club, team) {
  var validatedLeague = leagueValidator(league);
  leagues[validatedLeague.ageGroup][validatedLeague.division].push({club: club, team: team});
}

function getClubTeams(club) {

  var teams = {
  };

  _.forEach(leagues, function(ageGroup, ageGroupName) {
    _.forEach(ageGroup, function(division, divisionName) {

      var teamList = division.map(function(element) {
        if (element.club === club) {
          return element.club + (element.team ? ' ' + element.team : '');
        }
        else {
          return false;
        }
      });

      if (teamList.length > 0){
        teams[ageGroupName + divisionName] = teamList;
      }
    });

  });

  return teams;

}