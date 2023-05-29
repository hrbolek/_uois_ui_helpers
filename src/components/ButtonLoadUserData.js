import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SelectUser } from './SelectUser';
import { UsersFetch } from 'reducers/UserAsyncActions';


export const LoadUserData = () => {

  const dispatch = useDispatch()   // načítací tlačítko button používá dispatch...v každé funkci ho importujeme zvlášť 
  const [dataLoaded, setDataLoaded] = useState(false)  // vytvářím funkční alias-. dál používám jen dispatch, zneviditelním button po kliknutí 

  const users = useSelector(state => state.users)


  useEffect(
    () => {
      console.log("loading users data")
      dispatch(UsersFetch())
    }, []
  )
  if (users) {
    return (
      <SelectUser users={users}/>
    )
  } else {
    <div>Loading... users</div>
  }


  /*
  const fetchData = async () => { // asynchronní funkce-> další kody mohou být prováděny...čekáme než mi přijdou data ze serveru
    //(aktivně mohu mezitím provádět další věci)
    // výjimka- try-catch- když to ze serveru nepříjde 
    try {                            
      const response = await UserPageQuery();// response bude trvat-> počkej
      const data = await response.json();
      dispatch(UserActions.loadFromServer(data.data.userPage)); //ukládám do storu hned na začátku
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
    */
   //dataloaded && <SelectUser - pokud je button viditelný->nezobfrazuji další komponentu
}