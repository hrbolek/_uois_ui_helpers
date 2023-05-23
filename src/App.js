import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AssignmentsCard } from "components/AssignmentsCard"
import { Assignments } from "stories/DataStructures"
import { ButtonAddTask } from 'components/ButtonAddTask';
import { AppProvider } from 'utils/store';
import { useSelector } from 'react-redux';
import { SurveySelect} from "components/ButtonSurveySelect"
import { TaskSelect } from 'components/ButtonTaskSelect';
import { UserSelect } from 'components/ButtonUserSelect';
/*
function getData (id= "adde473d-5c78-4171-bf16-8e7f97bef5f9") {
  const tmp = useSelector(state => state.tasks)
  return tmp[id]
}
*/

function App() {
  return (
    <div className="App">
      <AppProvider>

        <UserSelect />
        
      </AppProvider>
      
    </div>
  );
}
      /*
      
      <AppProvider>
        <GroupPageProvider id="2d9dcd22-a4a2-11ed-b9df-0242ac120003" />

      </AppProvider>
      */
export default App;
