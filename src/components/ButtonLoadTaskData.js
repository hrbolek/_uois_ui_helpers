import  { TaskSelectQuery }  from '../queries/TaskGroupQuery';
import { useDispatch } from 'react-redux';
//import { loadData } from 'features/SurveySlice';
import { useState } from 'react';
import { TaskActions } from 'utils/TaskReducers';

export const LoadTaskData = () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await TaskSelectQuery();
        const data = await response.json();
        console.log(data)
        dispatch(TaskActions.loadFromServer(data.data.taskPage));
        setDataLoaded(true)
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
 
  return (
    <div>
      <button class="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Načti úkoly</button>
    </div>
  )
}