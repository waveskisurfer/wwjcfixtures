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

/**
 * Allows you to retrieve the list of teams entered into a particular league
 * @param {string} league the league you want to retrieve the teams for. The league consists of an age category and
 * a division, e.g. U9A or U13B2
 * @returns {*} an array of team names entered in the league
 */
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

/**
 * Used to add a team to a league.
 * @param {string} league the league you want to add the team for. The league consists of an age category and
 * a division, e.g. U9A or U13B2
 * @param {string} club the name of the club that the team belongs to
 * @param {string} team a single character team designator, e.g. A for the A team, B for the B team, etc
 */
function addTeamToLeague(league, club, team) {
  var validatedLeague = leagueValidator(league);
  leagues[validatedLeague.ageGroup][validatedLeague.division].push({club: club, team: team});
}

/**
 * Retrieves all the teams in all the division that are part of the designated club
 * @param club the club for which we are looking for teams for
 * @returns {{}} an object containing an array of team names for each league that this club has a team entered
 */
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