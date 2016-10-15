/**
 * Checks to make sure that the league name is a valid league for the district
 * @param {string} leagueName the leagueName being checked. The league name consists of an age category and a division,
 * e.g. U9A or U13B2
 * @returns {{}} an object containing the agegroup and the division for this particular league.
 */
module.exports = function(leagueName) {

  var league = {};

  var pattern = /^(U9(A|B)|U1(1|3|5)(A|B1|B2)|U17A)$/i;

  if (!pattern.test(leagueName)) {
    throw('League name is incorrect. Valid values are U9A, U9B, U11A, U11B1, U11B2, U13A, U13B1, U13B2, U15A, U15B1, U15B2 and U17A');
  }

  switch (leagueName.length) {
    case 3:   // Has to be U9A or U9B
      league.ageGroup = leagueName.toUpperCase().substr(0, 2);
      league.division = leagueName.toUpperCase().substr(2, 1);
      break;
    case 4:
      league.ageGroup = leagueName.toUpperCase().substr(0, 3);
      league.division = leagueName.toUpperCase().substr(3, 1);
      break;
    case 5:
      league.ageGroup = leagueName.toUpperCase().substr(0, 3);
      league.division = leagueName.toUpperCase().substr(3, 2);
      break;
    default:
      throw('League name is incorrect. Valid names should include an age group and division, e.g. U15A');
  }
  return league;
};