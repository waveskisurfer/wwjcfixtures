/**
 * Created by graeme on 15/10/2016.
 */
var _ = require('lodash');
var leagues = require('../leagues/leagues');

var U11BLeagueTeams = {};
var U13BLeagueTeams = {};
var U15BLeagueTeams = {};

module.exports = {
  processEntryForm : processEntryForm,
  addBLeagueTeam : addBLeagueTeam,
  getTeamBDivision : getTeamBDivision,
  getAgeGroupList : getAgeGroupList,
  splitAgeGroupEntries : splitAgeGroupEntries
};

function processEntryForm(entryForm) {

  var totalEntries = [];

  _.forEach(entryForm.entries, function(entry, ageGroup) {
    var girlsEntries = splitAgeGroupEntries(entry, 'girls');
    var boysEntries = splitAgeGroupEntries(entry, 'boys');

    totalEntries = totalEntries.concat(getAgeGroupList(entryForm.club, ageGroup, girlsEntries));
    totalEntries = totalEntries.concat(getAgeGroupList(entryForm.club, ageGroup, boysEntries));
  });

  return totalEntries;
}

/**
 * Sets which B division a club belongs to in a particular league
 * @param club the name of the club
 * @param ageGroup the age group for the league
 * @param division the division that this clubs teams will be entered into in this league
 * @returns {{}} an object for the age group containing each club and the division its team is in
 */
function addBLeagueTeam(club, ageGroup, division) {

  switch(ageGroup) {
    case 'U9':
      break;         // There is only one U9 B league so don't do anything
    case 'U11':
      if (U11BLeagueTeams[club]) {  // Exists already
        U11BLeagueTeams[club].push(division);
      }
      else {
        U11BLeagueTeams[club] = [division];
      }
      return U11BLeagueTeams;
      break;
    case 'U13':
      if (U13BLeagueTeams[club]) {  //Exists already
        U13BLeagueTeams[club].push(division);
      }
      else {
        U13BLeagueTeams[club] = [division];
      }
      return U13BLeagueTeams;
      break;
    case 'U15':
      if (U15BLeagueTeams[club]) {
        U15BLeagueTeams[club].push(division);
      }
      else {
        U15BLeagueTeams[club] = [division];
      }
      return U15BLeagueTeams;
      break;
    case 'U17':
      break;         // There is no U17 B league so don't do anything
    default:
      throw('Age group ' + ageGroup + ' invalid. Must be one of U9, U11, U13, U15 or U17.');
  }
}

/**
 * Returns which B division a club belongs to in a particular league
 * @param club the name of the club
 * @param ageGroup the age group for the league
 * @returns {*} the division that the B teams for this club belong to
 */
function getTeamBDivision(club, ageGroup) {

  switch(ageGroup) {
    case 'U9':
      return ['B'];   // There is only one U9 B division so just return B
      break;
    case 'U11':
      return (U11BLeagueTeams[club] ? U11BLeagueTeams[club] : []);
      break;
    case 'U13':
      return (U13BLeagueTeams[club] ? U13BLeagueTeams[club] : []);
      break;
    case 'U15':
      return (U15BLeagueTeams[club] ? U15BLeagueTeams[club] : []);
      break;
    case 'U17':
      return [];    // There is no U17 B division so just return an empty string
      break;
    default:
      throw('Age group ' + ageGroup + ' invalid. Must be one of U9, U11, U13, U15 or U17.');
  }
}

/**
 * Takes the entry counts for a particular age group and generates a list of teams and the leagues they are
 * entered into
 * @param club the club name for the club entering the teams
 * @param ageGroup contains the age group that the entries are being processed for
 * @param ageGroupEntries contains the number of teams entered in each division in an age group
 * @returns {Array} a list of teams and the leagues they are entered into
 */
function getAgeGroupList(club, ageGroup, ageGroupEntries) {

  var ageGroupList = [];
  var designators = [];

  // Specialcase the U17 are there is no division properties for U17.
  if (ageGroup === 'U17') {
    designators = getTeamDesignators(ageGroupEntries.numberOfTeams).sort(descending);

    for (var entryNumber = 0; entryNumber < ageGroupEntries.numberOfTeams; entryNumber++) {
      if (ageGroupEntries.numberOfTeams === 1) {
        ageGroupList.push({league: ageGroup, club: club, team: ''});
      }
      else {
        ageGroupList.push({league: ageGroup, club: club, team: designators.pop()});
      }
    }
  }
  else {
    var totalNumberOfTeams = 0;

    // First loop is to get the total number of teams in the age group
    _.forEach(ageGroupEntries, function(entries) {
      totalNumberOfTeams += entries.numberOfTeams;
    });

    designators = getTeamDesignators(totalNumberOfTeams).sort(descending);

    // Second loop is to build an array of entries
    _.forEach(ageGroupEntries, function(entries, division) {
      if (entries.numberOfTeams > 0) {
        switch (totalNumberOfTeams) {
          case 0:
            break;
          case 1:
            if (division === 'B') {
              ageGroupList.push({league: ageGroup + getTeamBDivision(club, ageGroup)[0], club: club, team: ''});
            }
            else {
              ageGroupList.push({league: ageGroup + division, club: club, team: ''});
            }
            break;
          default:
            for (var entryNumber = 0; entryNumber < entries.numberOfTeams; entryNumber++) {
              if (division === 'B') {

                var divSelector = (entryNumber) % getTeamBDivision(club, ageGroup).length;

                ageGroupList.push({league: ageGroup + getTeamBDivision(club, ageGroup)[divSelector], club: club, team: designators.pop()});
              }
              else {
                ageGroupList.push({league: ageGroup + division, club: club, team: designators.pop()});
              }
            }
        }
      }
    });
  }

  return ageGroupList;
}

/**
 * Takes the entry list and splits it into boys entries or girls entries
 * @param entries the entry list
 * @param gender which gender to split the list on
 * @returns {{}} an entry list for the specific gender
 */
function splitAgeGroupEntries(entries, gender) {

  var splitEntries = {};

  if (gender === 'girls') {
    _.forEach(entries, function(entry, key) {
      if (key === 'G') {
        splitEntries[key] = entry;
      }
    });
  }
  else if (gender === 'boys') {
    _.forEach(entries, function(entry, key) {
      if (key !== 'G') {
        splitEntries[key] = entry;
      }
    });
  }
  else {
    throw('The gender ' + gender + ' is invalid. It should either be boys or girls.');
  }

  return splitEntries;
}

//************************************************* Start of private functions *****************************************
/**
 * Calculate the team designators based on the number of teams in the age group. If there is more than
 * one team in the age group, then this will return an array of designators like ['A', 'B', 'C'] to represent
 * Team A, Team B and Team C. If there is 1 or no team in the age group then an empty array will be returned.
 * @param numberOfTeams
 * @returns {*[]} an array containing the team designators
 */
function getTeamDesignators(numberOfTeams) {

  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var designators = [];

  if (numberOfTeams > alphabet.length) {
    throw('Invalid number of teams. Value ' + numberOfTeams + ' should be a maximum of ' + alphabet.length);
  }

  if (numberOfTeams > 1) {
    for (var team = 0; team < numberOfTeams; team++) {
      designators.push(alphabet.substr(team, 1));
    }
  }

  return designators;
}

/**
 * A simple comparator function to sort an array in descending order.
 * @param a the first operand to compare
 * @param b the second operand to compare
 * @returns {number} a negative number of a > b, a positive number if a < b and zero if a = b
 */
function descending(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
