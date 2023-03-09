import React from "react"
import { Link } from 'gatsby';

const myStyle = {
  fontWeight: 'bold',
};

const Last10Template = props => {
//<Dump data={props} />
	const last10Data = props.pageContext.last10Data;

	return (
	<React.Fragment>
		<div className="row">
			<div className="col">
				<h1>International Golden League</h1>
                <h2>Last 10 seasons</h2>
				<p>Season {`${last10Data.currentseason-9}`}-{last10Data.currentseason}. Updated: {last10Data.timestamp}</p>

				<table className="table table-striped table-sm ">
					<thead>
						<tr>
							<th></th>
							<th className="text-left">Team</th>
							<th className="text-right">Seasons</th>
							<th className="text-right">Wins</th>
							<th className="text-right">Points</th>
							<th className="text-right">Event scores</th>
						</tr>
					</thead>
					<tbody>
					{last10Data.league10.map((data, index) => {
						let classTR = {};
						if (data.lastseason === last10Data.currentseason) {
							classTR = myStyle;
						}
						return <tr key={`${index}`}>
									<td style={classTR}>{`${index+1}`}</td>
									<td style={classTR}>
										<img src={`https://www.maxithlon.com/common/images/flags/16/${data.flag}`} />&nbsp;&nbsp;
										<Link to={`/team/${data.teamid}`}>{data.teamname}</Link>
									</td>
									<td style={classTR} className="text-right">{data.seasons10}</td>
									<td style={classTR} className="text-right">{data.wins10 == 0 ? '' : data.wins10}</td>
									<td style={classTR} className="text-right">{data.points10}</td>
									<td style={classTR} className="text-right">{data.eventscores10}</td>
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
				<p>
                    <i>First version: 2020-03-23</i><br/>
                    <i>Added last 10 seasons and all winners: 2023-03-06</i>
                </p>
			</div>
		</div>
		<img src="https://counter2.mallverkstan.net/host.php?kundnr=1095&sida=GL"/>
	</React.Fragment>
	)
}

export default Last10Template
