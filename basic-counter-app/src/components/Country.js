import React,{useState} from 'react';
import {useGetCountriesQuery,useAddNewCountryMutation,useDeleteCountryMutation,useEditCountryMutation} from "../api/CountrySlice";

export function Country() {
    const [inputValue,setInputValue]=useState('');
    const[savenewPost,setsaveNewPost]=useState(false);
    const[apiError,setApiError]=useState('');
    const[updationEnable,SetUpdationEnable]=useState(false);
    const[editValue,setEditValue]=useState({})
    const{ data,isLoading,error,isSuccess,isFetching} =useGetCountriesQuery();
    const [addNewCountry,{isLoading:isLoading1}] = useAddNewCountryMutation();
    const [deleteCountry] = useDeleteCountryMutation();
    const [updateCountry] = useEditCountryMutation();
    const handleAmountHandler = (event) => {
        setInputValue(event.target.value)
      }
    const resetHandler = (event) => {
      setInputValue('')
      setEditValue({})
    }
    // Also, earlier we saw that query hooks have both an 
    //isLoading flag, which is true if this is the first request for data, and an 
    //isFetching flag, which is true while any request for data is in progress.

    const edithandler = (id,name) => {
      SetUpdationEnable(true)
      setEditValue({id,name})
    }
    const handleEditHandler = (event) => {
      setEditValue((prev) => {
        return {
          ...prev,
          name:event.target.value
        }
      })
    }

    const UpdateFormHandler = async(event) => {
      event.preventDefault()
      if(editValue === ''){
        alert('enter country name')
        return ;
      }
      let newObj={
        id:editValue.id,
        country:editValue.name
      }
    
      try{
        setApiError(null)
        await updateCountry(newObj).unwrap();
        SetUpdationEnable(false)      
        resetHandler()
      }catch (err) {
        setApiError(err.status)
        console.error('Failed to update the Country: ', err)
      }  
    }


    let content;
  if (data && isLoading) {
    content = <p className='pending'>Loading...</p>
  }  
  else if (error) {
    content = <div className='error'>{JSON.stringify(error)}</div>
  }
  else if (isSuccess) {
   if(data.length>0){
      content = data && data.map(item => <div key={item.id} className='my-accounts'>  Country Name={item.country} <div className='btn-group'>
      <button onClick={() =>edithandler(item.id,item.country)}>Edit</button>
      <button onClick={() =>deleteCountry(item.id)}>Delete</button>
      </div></div>)
    }
    else{
      content=<p style={{paddingBottom:'15px'}}><strong>There is no countery list please add country name</strong></p>
    }
   }
   
  
  const formHandler = async (event) => {
    event.preventDefault()
    if(inputValue === ''){
      alert('enter country name')
      return ;
    }
    let newObj={
      id:Date.now(), // generate unique id
      country:inputValue
    }
    try{
      setApiError(null)
      await addNewCountry(newObj).unwrap();
      
      setsaveNewPost(true)
      resetHandler()
    }catch (err) {
      setsaveNewPost(false)
      setApiError(err.status)
      console.error('Failed to save the Country: ', err)
    }
    
  }
  return (
    <div className='account'>
    <h2>Country Lists</h2><hr/> 
    <form onSubmit={formHandler}>
      <label>
        <input type="text" placeholder='enter country name' value={inputValue} onChange={handleAmountHandler}/>
      </label>
    <button type="submit">Add New Country</button>
    </form>
    {isLoading1 && <p className='pending'>waiting for add new country...</p>}
    
    {content}
    {isFetching && savenewPost && <p className='pending'>fetch new country recently addedd...</p>}
     {/* api error when add new country */}
   {apiError && <div className='error'>{apiError}</div>}

   {updationEnable && <>
    <form onSubmit={UpdateFormHandler}>
      <label>
        <input type="text" value={editValue.name} onChange={handleEditHandler}/>
      </label>
    <button type="submit">Update Country</button>
    </form>
   </>}
</div>
  )
}

