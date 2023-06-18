import React, { useState } from "react";
import { DateInput, TaskDateFulfillmentInput } from "./Tasks/TaskDateFulfillmentInput";
import { DummyInput } from "./Tasks/DummyInput";
import { DescriptionInput } from "./DescriptionInput";
import { DatePicker } from "./Tasks/TaskDateSubmissionInput";
import { TaskNameInput } from "./Tasks/TaskNameInput";
import { TaskBriefDescriptionInput } from "./Tasks/TaskBriefDescriptionInput";
import { TaskDetailedDescriptionInput } from "./Tasks/TaskDetailedDescriptionInput";
import { TaskReferenceInput } from "./Tasks/TaskReferenceInput";
import { TaskDateSubmissionInput } from "./Tasks/TaskDateSubmissionInput";

const dateStyle = {
  flex: 1,
  backgroundColor: 'lightblue',
}

export const MultipleInput= ({user, setTask, task}) => {
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
      <div style={{ display: 'flex'}}>
          <div style={{flex: 1, backgroundColor: 'lightblue'}}>
              <DummyInput name="jméno" userName={user.name}/>
          </div>
          <div style={{flex: 1, backgroundColor: 'lightblue'}}>
              <DummyInput name="příjmení" userName={user.surname}/>
          </div>
        </div>

        <TaskNameInput name="název úkolu" setTaskName={handleNameChange}/>
        <TaskBriefDescriptionInput name="stručný popis úkolu" setTaskBriefDescription={handleBriefDescChange}/>

        <TaskDetailedDescriptionInput name="úplný popis úkolu" setTaskDetailedDescription={handleDetailedDescChange}/>

        <TaskReferenceInput name="odkaz na stránku" setTaskReference={handleReferenceChange}/>

        <div style={{display: 'flex'}}>
          <div style={dateStyle}>
            <TaskDateSubmissionInput name="Datum odevzdání:" setTaskDateSubmission={handleDateOfSubmissionChange}/>
          </div>

          <div style={dateStyle}>
            <TaskDateFulfillmentInput name="Datum naplnění:" setTaskDateFulfillment={handleDateofFulfillmentChange}/>
            </div>      
        </div>
    </div> 
  );
}