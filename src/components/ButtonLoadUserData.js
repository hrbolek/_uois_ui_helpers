import  { UserSelectQuery}  from '../queries/UserGroupQuery';
import { useDispatch } from 'react-redux';
//import { loadData } from 'features/SurveySlice';
import { useState } from 'react';
import { UserActions } from 'utils/UserReducers';
import { SelectUser } from './SelectUser';


export const LoadUserData = () => {

  const dispatch = useDispatch()   // načítací tlačítko button používá dispatch...v každé funkci ho importujeme zvlášť 
  const [dataLoaded, setDataLoaded] = useState(false)  // vytvářím funkční alias-. dál používám jen dispatch, zneviditelním button po kliknutí 


    const fetchData = async () => { // asynchronní funkce-> další kody mohou být prováděny...čekáme než mi přijdou data ze serveru
      //(aktivně mohu mezitím provádět další věci)
      // výjimka- try-catch- když to ze serveru nepříjde 
      try {                            
        const response = await UserSelectQuery();// response bude trvat-> počkej
        const data = await response.json();
        console.log(data)
        dispatch(UserActions.loadFromServer(data.data.userPage)); //ukládám do storu hned na začátku
        setDataLoaded(true) 
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
 //dataloaded && <SelectUser - pokud je button viditelný->nezobfrazuji další komponentu
  return (
    <div>
      <button class="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Načti uživatele</button> 
        
      {dataLoaded && <SelectUser />} 
    </div>
  )
}