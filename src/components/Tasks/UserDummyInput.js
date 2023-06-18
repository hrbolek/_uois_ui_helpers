import { TaskDummyInput } from "./TaskDummyInput"

export const UserDummyInput = ({user}) => {
    return (
        <div style={{ display: 'flex'}}>
          <div style={{flex: 1, backgroundColor: 'lightblue'}}>
              <TaskDummyInput name="jméno" userName={user.name}/>
          </div>
          <div style={{flex: 1, backgroundColor: 'lightblue'}}>
              <TaskDummyInput name="příjmení" userName={user.surname}/>
          </div>
        </div>
    )
}