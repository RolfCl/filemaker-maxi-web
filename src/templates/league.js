import React from "react"
import { Link } from 'gatsby';
import Dump from '@wesbos/dump'

const myStyle = {
  fontWeight: 'bold',
};

const LeagueTemplate = props => {
//<Dump data={props} />
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
									<td style={classTR}><Link  to={`/team/${data.teamid}`}>
										<img src={`https://www.maxithlon.com/common/images/flags/16/${data.flag}`} />&nbsp;&nbsp;{data.teamname}</Link></td>
									<td style={classTR} className="text-right">{data.seasons}</td>
									<td style={classTR} className="text-right">{data.points}</td>
									<td style={classTR} className="text-right">{data.eventscores}</td>
								</tr>
					})}
					</tbody>
				</table>
				<h3 className="mt-4">About</h3>
				<p>This site is a test of <a href="https://www.gatsbyjs.org">Gatsby</a>, a static web site generator. 
				All information is from the online game <a href="https://www.maxithlon.com/?r=11791">Maxithlon</a>.</p>
				<p>XML from Maxithlon is fetched once a week by <a href="https://www.claris.com/filemaker/">FileMaker</a>, a low-code, rapid development database tool. 
				The data is processed in FileMaker, and uploaded to <a href="https://github.com">Github</a> as json files.</p>
				<p>The upload triggers a rebuild of static html files, hosted by <a href="https://www.netlify.com">Netlify</a>.</p>
			</div>
		</div>
		<div id="reff"></div>
		<script>
			var ref=escape(document.referrer);
			document.getElementById('reff').innerHTML='<img SRC="https://counter2.mallverkstan.net/host.php?kundnr=1095&sida=GL&ref='+ref+'"/>';
		</script>
	</React.Fragment>
	)
}

export default LeagueTemplate
