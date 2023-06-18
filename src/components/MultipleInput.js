import React, { useState } from "react";
import { DateInput } from "./DateInput";
import { WriteInput } from "./WriteInput";
import { DescriptionInput } from "./DescriptionInput";
import { DatePicker } from "./DatePicker";

const dateStyle = {
  flex: 1,
  backgroundColor: 'lightblue',
}

export const MultipleInput= ({user, setTask, task}) => {
  const [newName, setNewName] = useState()
  const handleNameChange = (newName) => {
    setTask({...task, name:newName})
  }

  const handleBriefDescChange = (newBriefDesc) => {
    setTask({...task, briefDes:newBriefDesc})
  }

  const handleDetailedDescChange = (newDetailedDesc) => {
    setTask({...task, detailedDes:newDetailedDesc})
  }

  const handleReferenceChange = (newReference) => {
    setTask({...task, reference:newReference})
  }

  const handleDateOfSubmissionChange = (newSubDate) => {
    setTask({...task, dateOfSubmission:newSubDate})
  }

  const handleDateofFulfillmentChange = (newFulDate) => {
    setTask({... task, dateOfFulfillment:newFulDate})
  }


  const width = "160px"
  return (
    <div>
      <div style={ {
      display: 'flex',
            }}>
          <div style={ {
                flex: 1,
                backgroundColor: 'lightblue',
              }}>
            <WriteInput name = "jméno" width={width} placeholder="sometext" username={user?.name} readOnly={user?.readOnly}/>
          </div>
          <div style={ {
                flex: 1,
                backgroundColor: 'lightblue',
              }}>
            <WriteInput name = "příjmení" width={width} username={user?.surname} readOnly={user?.readOnly}/>
          </div>
        </div>
        
        <WriteInput name = "název úkolu" setTaskAtribute={handleNameChange}/>
        
        <WriteInput name = "stručný popis úkolu" setTaskAtribute={handleBriefDescChange}/>
        <DescriptionInput name="úplný popis úkolu" setTaskAtribute={handleDetailedDescChange}/>
        <WriteInput name = "odkaz na stránku" setTaskAtribute={handleReferenceChange}/>
       

        <div style={ {
      display: 'flex',
            }}>

          <div style={dateStyle}>
            <DatePicker name="Datum odevzdání:" setTaskAtribute={handleDateOfSubmissionChange}/>
          </div>

          <div style={dateStyle}>
            <DatePicker name="Datum naplnění:" setTaskAtribute={handleDateofFulfillmentChange}/>
            </div>      
        </div>
    </div> 
  );
}
