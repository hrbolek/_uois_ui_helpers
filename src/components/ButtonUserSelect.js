import  { UserSelectQuery}  from '../queries/UserGroupQuery';
import { useDispatch } from 'react-redux';
//import { loadData } from 'features/SurveySlice';
import { useState } from 'react';
import { TaskActions } from 'utils/TaskReducers';

export const UserSelect= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await UserSelectQuery();
        const data = await response.json();
        console.log(data)
        dispatch(TaskActions.loadFromServer(data.data.userPage));
        setDataLoaded(true)
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
    <div>
      <button class="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Load Users</button>
    </div>
  )
}