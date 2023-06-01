import { useSelector } from "react-redux";
import { TryItComponent } from "./TryItComponent";
import { useState } from "react";
import { SelectUser } from "./SelectUser";
import { TaskPageQuery } from "queries/TaskPageQuery";
import { TaskActions } from "reducers/TaskReducers";
import { useDispatch } from "react-redux";
import { UsersFetch } from "fetches/UserAsyncActions";

const styleObject = {
  "--bs-nav-link-color": "var(--bs-white)",
  "--bs-nav-pills-link-active-color": "var(--bs-primary)",
  "--bs-nav-pills-link-active-bg": "var(--bs-white)"
};

export const HomeComponent = (props) =>  {
  const [studentShown, setStudentShown] = useState(0)
  const [teacherShown, setTeacherShown] = useState(false)

  const dispatch = useDispatch()  
  const users = useSelector(state => state.users)

  const studentClick = (event)=>  {
    setStudentShown(studentShown + 1)
    if (!studentShown) {
      dispatch(UsersFetch())
    }
  }

  const teacherClick = (event) => {
    setTeacherShown(!teacherShown)
  }

  return (
      <div>
      <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={styleObject}>
      <li class="nav-item" role="presentation">
          <button onClick={teacherClick} class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Editor</button>
        </li>
        <li class="nav-item" role="presentation">
          <button onClick={studentClick} class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Zobrazovač</button>
        </li>
      </ul>
        { Boolean(studentShown) && <SelectUser users={users}/> }
      </div>
    )
}