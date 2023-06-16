import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SelectUser } from './SelectUser';
import { UsersFetch } from 'fetches/UserAsyncActions';


export const LoadUserData = () => {

  const dispatch = useDispatch()   //loading button button uses dispatch...in each function we import it separately
  const [dataLoaded, setDataLoaded] = useState(false)  //create a working alias, continue to use only dispatch
  //makes the button invisible 

  const users = useSelector(state => state.users)


  useEffect(
    () => {
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