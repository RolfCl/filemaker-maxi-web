import React from "react"
import { Link } from 'gatsby';

const myStyle = {
  fontWeight: 'bold',
};

const WinnerTemplate = props => {
//<Dump data={props} />
	const winnerData = props.pageContext.winnerData;

	return (
	<React.Fragment>
		<div className="row">
			<div className="col">
				<h1>International Golden League</h1>
				<h2>Winners</h2>
				<p>Season 29-{winnerData.currentseason}. Updated: {winnerData.timestamp}</p>

				<table className="table table-striped table-sm ">
					<thead>
						<tr>
							<th></th>
							<th className="text-left">Team</th>
							<th className="text-right">Seasons</th>
							<th className="text-right">Wins</th>
						</tr>
					</thead>
					<tbody>
					{winnerData.winners.map((data, index) => {
						let classTR = {};
						if (data.lastseason === winnerData.currentseason) {
							classTR = myStyle;
						}
						return <tr key={`${index}`}>
									<td style={classTR}>{`${index+1}`}</td>
									<td style={classTR}>
										<img src={`https://www.maxithlon.com/common/images/flags/16/${data.flag}`} />&nbsp;&nbsp;
										<Link to={`/team/${data.teamid}`}>{data.teamname}</Link> ({data.winseasons})
                                        
									</td>
									<td style={classTR} className="text-right">{data.seasons}</td>
									<td style={classTR} className="text-right">{data.wins}</td>
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

export default WinnerTemplate
