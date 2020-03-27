import React from "react"
import { Link } from 'gatsby';

const myStyle = {
  fontWeight: 'bold',
};

const LeagueTemplate = props => {

	const leagueData = props.pageContext.leagueData;

	return (
	<React.Fragment>
		<div className="row">
			<div className="col">
				<h1>International Golden League</h1>
				<p>Season 29-{leagueData.currentseason}. Updated: {leagueData.timestamp}</p>

				<table className="table table-striped table-sm ">
					<thead>
						<tr>
							<th></th>
							<th className="text-left">Team</th>
							<th className="text-right">Seasons</th>
							<th className="text-right">Points</th>
							<th className="text-right">Event scores</th>
						</tr>
					</thead>
					<tbody>
					{leagueData.league.map((data, index) => {
						let classTR = {};
						if (data.lastseason === 74) {
							classTR = myStyle;
						}
						return <tr key={`${index}`}>
									<td style={classTR}>{`${index+1}`}</td>
									<td style={classTR}><Link  to={`/team/${data.teamid}`}>{data.teamname}</Link></td>
									<td style={classTR} className="text-right">{data.seasons}</td>
									<td style={classTR} className="text-right">{data.points}</td>
									<td style={classTR} className="text-right">{data.eventscores}</td>
								</tr>
					})}
					</tbody>
				</table>
				<h3 className="mt-4">About</h3>
				<p>This web site is a result of a test of the static web site generator <a href="https://www.gatsbyjs.org">Gatsby</a>. 
				All information are from the online game <a href="https://www.maxithlon.com/?r=11791">Maxithlon</a>.</p>
				<p>XML from Maxithlon is fetched once a week by FileMaker, a low-code, rapid development database tool. The data is processed in FileMaker, 
					and uploaded to Github as json files. Every week 17 files are uploaded to Github, one for the total table and one for each team currently
					in the Golden League.</p>
					<p>The upload triggers a rebuild of all html files, hosted by <a href="https://www.netlify.com">Netlify</a>.</p>
			</div>
		</div>
	</React.Fragment>
	)
}

export default LeagueTemplate
