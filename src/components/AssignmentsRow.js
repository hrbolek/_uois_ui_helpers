import { Card, Row, Table } from "react-bootstrap"

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
export const AssignmentsRow = ({index, name, detailedDesc, reference, dateOfEntry, dateOfSubmission, briefDesc, id }) => {
    const today = new Date().getTime();
    let deadline_color = "red";
    if (today < dateOfSubmission) {
      // deadline in the future
      deadline_color = "green";
    }
  
    const dateEntryTD = new Date(dateOfEntry);
    const dateSubmissionTD = new Date(dateOfSubmission);

    // Creating a row layout
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {name}</td>
        <td> {formatDate(dateEntryTD)}</td>
        <td style={{color:deadline_color}}> {formatDate(dateSubmissionTD)}</td>
        <td> {briefDesc}</td>
        <td> {detailedDesc}</td>
        <td> <a href={reference} target="_blank">úkol</a></td>

      </tr>







      /*
      <div className="row">
        <div className="col">
          <h5>{name}</h5>
          <div>
            zadáno {dateEntryTD.toLocaleDateString()}
          </div>
          <div>
            datum odevzdání <span style={{ color: deadline_color }}>{dateSubmissionTD.toLocaleDateString()}</span>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-dark">
            <div className="card-body">
              <div className="card text-dark">
                {briefDesc}
              </div>
              <div className="card text-dark">
                {detailedDesc}
              </div>
            </div>
            <div className="card-footer">
              <a href={reference} target="_blank">odkaz na úkol</a>
            </div>
          </div>
        </div>
      </div>
      */
    );
  };
  