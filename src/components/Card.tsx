import { IItem } from "../types";

interface ICard{
    item: IItem,
    isFlagged: boolean,
    flaggedItems:Array<number>,
    setFlaggedItems: React.Dispatch<React.SetStateAction<number[]>>
   }
   const Card = (props: ICard) => {
     const {full_name, description, owner, id} = props.item;
     const onCardClickHandler = () => {
       if(props.isFlagged){
         const updatedFlaggedItems = props.flaggedItems.filter(item => item!==id)
         props.setFlaggedItems(updatedFlaggedItems)
         localStorage.setItem('flaggedItems', JSON.stringify(updatedFlaggedItems))
       } else {
         const updatedFlaggedItems = [...props.flaggedItems, id]
         props.setFlaggedItems(updatedFlaggedItems)
         localStorage.setItem('flaggedItems', JSON.stringify(updatedFlaggedItems))
       }
       
     }
   
     return <div className={`card ${props.isFlagged ? 'flagged' : ''}`} onClick={onCardClickHandler}>
       <div className='row'>
         <div className='col-2'>
           <img src={owner.avatar_url} className='avatar' alt={full_name}/>
         </div>
         <div className='col-10'>
           <h3 className='item_fullName'>{full_name} </h3>
           <p className='item_description'>{description}</p>
           
         </div>
       </div>
   </div>
   }

   export default Card