import { TaskNameInput } from "./TaskNameInput"
import { TaskBriefDescriptionInput } from "./TaskBriefDescriptionInput"
import { TaskDetailedDescriptionInput } from "./TaskDetailedDescriptionInput"
import { TaskReferenceInput } from "./TaskReferenceInput"
import { TaskDateFulfillmentInput } from "./TaskDateFulfillmentInput"
import { TaskDateSubmissionInput } from "./TaskDateSubmissionInput"


const dateStyle = {
    flex: 1,
    backgroundColor: 'lightblue',
  }
  //eveeeeennnnts do commit
  //rename callbacks onNameChange
export const TaskActiveInputs = ({setTask, task, actions}) => {
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
      //add actions, onTaskNameChange
    return (
        <div>
            <TaskNameInput name="název úkolu" setTaskName={handleNameChange} task={task} />
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
    )
}