import React from "react"
import JSONData from "../../content/league.json"

const myStyle = {
  fontWeight: 'bold',
};

const JSONbuildtime = () => (
<div className="row">
  <div className="col">
    <p>{JSONData.timestamp}</p>
    <table className="table table-striped table-sm ">
        <thead>
          <tr>
        <th></th>
        <th className="text-left">Team (seasons)</th>
        <th className="text-right">Points</th>
        <th className="text-right">Event scores</th>
        </tr>
        </thead>
      <tbody>
    {JSONData.league.map((data, index) => {
       let classTR = {};
       if (data.lastseason == 74) {
        classTR = myStyle;
       }
        return <tr key={`${index}`}>
                <td style={classTR}>{`${index+1}`}</td>
                <td style={classTR}>{data.teamname} ({data.seasons}) </td>
                <td style={classTR} className="text-right">{data.points}</td>
                <td style={classTR} className="text-right">{data.eventscores}</td>
        </tr>
      })}
      </tbody>
    </table>
    </div>
</div>
)
export default JSONbuildtime
