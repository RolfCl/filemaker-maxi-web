// gatsby-node.js
const path = require(`path`);
const fs = require('fs');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const leagueData = JSON.parse(fs.readFileSync('./content/league.json', { encoding: 'utf-8' }));
  const leagueTemplate = path.resolve('src/templates/league.js');
  const teamTemplate = path.resolve('src/templates/team.js');

  createPage({
    path: '/',
    component: leagueTemplate,
    context: {
      leagueData
    },
  });

  leagueData.league.forEach(team => {
    createPage({
      path: 'team/'+team.teamid,
      component: teamTemplate,
      context: {
        ...team,
        teamData: JSON.parse(fs.readFileSync('./content/team_' + team.teamid + '.json', { encoding: 'utf-8' }))
      },
    });
  });
};