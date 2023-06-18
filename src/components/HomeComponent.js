import { useSelector } from "react-redux";
import { TryItComponent } from "./TryItComponent";
import { useEffect, useState } from "react";
import { SelectUser } from "./SelectUser";
import { TaskPageQuery } from "queries/TaskPageQuery";
import { TaskActions } from "reducers/TaskReducers";
import { useDispatch } from "react-redux";
import { UsersFetch } from "fetches/UserAsyncActions";
import { GroupsFetch } from "fetches/GroupAsyncActions";
import { SelectGroup } from "./SelectGroup";
import { WriteInput } from "./Tasks/DummyInput";
import { MultipleInput } from "./MultipleInput";
import { TaskInputModal } from "./TaskInputModal";
// creating a homepage
const styleObject = {
  "--bs-nav-link-color": "var(--bs-white)",
  "--bs-nav-pills-link-active-color": "var(--bs-primary)",
  "--bs-nav-pills-link-active-bg": "var(--bs-white)"
};
//two variables, used to track whether a student is currently displayed on the page or not
export const HomePage = (props) =>  {
  const [studentShown, setStudentShown] = useState(0)
  const [teacherShown, setTeacherShown] = useState(false)

  const dispatch = useDispatch()  
  const users = useSelector(state => state.users) // allows data to be selected from the state based on the respective keys used
  const groups = useSelector(state => state.groups)
// two dispatch functions, they will be called when any of these events occur
  const studentClick = (event)=>  {
    setStudentShown(studentShown + 1)
    if (!studentShown) {
      dispatch(UsersFetch())
      dispatch(GroupsFetch())
    }
  }

  const teacherClick = (event) => {
    setTeacherShown(!teacherShown)
    

  }

  const [user, setUser] = useState({})

  const [creatingTask, setCreateTask] = useState(false)

const setUserCallback = (event) => {
  setUser(event)
}

  const createTask = (event) => {
    setCreateTask(!creatingTask)
  }



//homepage creating
  return (
      <div>
      <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={styleObject}>
      <li className="nav-item" role="presentation">
          <button onClick={teacherClick} className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Editor</button>
        </li>
        <li className="nav-item" role="presentation">
          <button onClick={studentClick} className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Zobrazovač</button>
        </li>
      </ul>
        { Boolean(studentShown % 2) && <SelectUser users={users} setCreateTask={createTask} setUser={setUserCallback}/>} 
        { Boolean(studentShown % 2) && <SelectGroup groups={groups}/>}
        { teacherShown && <TaskInputModal showModal={teacherShown} setModal={setTeacherShown}/>}

        {creatingTask && <TaskInputModal showModal={creatingTask} setModal={setCreateTask} user={user}/>}
        
      </div>
    )
}