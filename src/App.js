import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from 'utils/store';
import { LoadUserData} from 'components/ButtonLoadUserData';
import { LoadTaskData } from 'components/ButtonLoadTaskData';
import { ButtonAddTask } from 'components/ButtonAddTask';
import { TaskLoader } from 'components/TaskLoader';
import { DateInput } from 'components/DateInput';
import { TryItComponent } from 'components/TryItComponent';
/*
function getData (id= "adde473d-5c78-4171-bf16-8e7f97bef5f9") {
  const tmp = useSelector(state => state.tasks)
  return tmp[id]
}
*/
//<LoadTaskData />

function App() {
  return (
    <div className="App">
      <AppProvider>
      <div style={{ display: 'flex'}}>
        <LoadUserData />
        <ButtonAddTask d={true}/>
        <TaskLoader />
      </div>
      <DateInput />
      <TryItComponent />

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
