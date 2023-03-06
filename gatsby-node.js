// gatsby-node.js
const path = require(`path`);
const fs = require('fs');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const leagueData = JSON.parse(fs.readFileSync('./content/league.json', { encoding: 'utf-8' }));
  const leagueTemplate = path.resolve('src/templates/league.js');
  const teamTemplate = path.resolve('src/templates/team.js');

  const winnerData = JSON.parse(fs.readFileSync('./content/winners.json', { encoding: 'utf-8' }));
  const winnerTemplate = path.resolve('src/templates/winners.js');

  const last10Data = JSON.parse(fs.readFileSync('./content/league10.json', { encoding: 'utf-8' }));
  const last10Template = path.resolve('src/templates/league10.js');

  createPage({
    path: '/',
    component: leagueTemplate,
    context: {
      leagueData
    },
  });

  createPage({
    path: '/winners',
    component: winnerTemplate,
    context: {
      winnerData
    },
  });

  createPage({
    path: '/last10',
    component: last10Template,
    context: {
      last10Data
    },
  });

  leagueData.league.forEach(team => {
    createPage({
      path: 'team/'+team.teamid,
      component: teamTemplate,
      context: {
        ...team,
        currentseason: leagueData.currentseason,
        teamData: JSON.parse(fs.readFileSync('./content/team_' + team.teamid + '.json', { encoding: 'utf-8' }))
      },
    });
  });
};