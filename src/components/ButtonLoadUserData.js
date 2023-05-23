import  { UserSelectQuery}  from '../queries/UserGroupQuery';
import { useDispatch } from 'react-redux';
//import { loadData } from 'features/SurveySlice';
import { useState } from 'react';
import { UserActions } from 'utils/UserReducers';
import { SelectUser } from './SelectUser';

export const LoadUserData = () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)


    const fetchData = async () => {
      try {
        const response = await UserSelectQuery();
        const data = await response.json();
        console.log(data)
        dispatch(UserActions.loadFromServer(data.data.userPage));
        setDataLoaded(true)
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
 
  return (
    <div>
      <button class="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Načti uživatele</button>

      {dataLoaded && <SelectUser />}
    </div>
  )
}