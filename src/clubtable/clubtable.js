var clubtable = {};

module.exports = {
  addTeam : addTeam
};

function addTeam(club, league, team, matchday) {


  if (!clubtable[club]) {
    clubtable[club] = {};
  }

  if (!clubtable[club][league]) {
    clubtable[club][league] = {};
  }

  clubtable[club][league][team] = { matchday : matchday, alternateWith : {} };

  return clubtable;
}