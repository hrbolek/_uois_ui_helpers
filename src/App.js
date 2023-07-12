import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from 'utils/store';

import { HomeRadio } from 'components/HomeRadio';
import { TryItComponent } from 'components/ComponentsToTry/TryItComponent';

//import { TryItComponent } from 'components/ComponentsToTry/TryItComponent';
import { ShowLabelButton } from 'components/ComponentsToTry/ShowLabelButton';

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
          <TryItComponent />

      </AppProvider>
      
    </div>
  );
  //<TryItComponent/>
}
      /*
      
      <AppProvider>
        <GroupPageProvider id="2d9dcd22-a4a2-11ed-b9df-0242ac120003" />

      </AppProvider>
      */
export default App;
