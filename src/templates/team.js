import React from 'react';
import { Link } from 'gatsby';

const myStyle = {
	fontWeight: 'bold',
	color: 'red'
 };
 
const TeamTemplate = props => {

	const team = props.pageContext;

	return (
		<React.Fragment>
			<div className="row">
				<div className="col">

					<h1>{team.teamname}</h1>
					<table className="table table-striped table-sm ">
						<thead>
							<tr>
								<th className="text-left">Season</th>
								<th className="text-right">Position</th>
								<th className="text-right">Points</th>
								<th className="text-right">Event scores</th>
							</tr>
						</thead>
						<tbody>
	
						{team.teamData.teamdata.map(season => {
							let classTR = {};
							if (season.position === 1) {
								classTR = myStyle;
							}
							return <tr key={season.season}>
								<td className="text-left">{season.season}</td>
								<td style={classTR} className="text-right">{season.position === 1 && season.season != 74? 'Winner' : season.position}</td>
								<td className="text-right">{season.points}</td>
								<td className="text-right">{season.eventscores}</td>
							</tr>
						})}
						<tr>
							<td className="text-left"></td>
							<td className="text-right"><b>Sum</b></td>
							<td className="text-right"><b>{team.points}</b></td>
							<td className="text-right"><b>{team.eventscores}</b></td>
						</tr>
						</tbody>
					</table>
					<Link  to={`/`}>Back to Table</Link>
				</div>
			</div>		 
		</React.Fragment>
	)
 };

export default TeamTemplate;