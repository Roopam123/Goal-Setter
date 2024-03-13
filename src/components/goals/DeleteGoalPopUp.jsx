import React from 'react';
import styles from "../../styles/deletepopup.module.css";
import { toast } from 'react-toastify';
import { deleteGoal } from '../../api';

const DeleteGoalPopUp = (props) => {

    let {goals, goal, setGoals, setIsDeletePopUpOpen} = props;

    const handleDeleteGoal = async()=>{
       try{
          let goal_id = props?.goal?._id;
          if(!goal_id){
            toast.error("Goal id not Found!");
            return;
          }
          let response = await deleteGoal(goal_id);
          if(response.success){
            toast.success(response.message);
            let newGoals = goals.filter((goalDoc)=>{
                   return goalDoc._id !== goal._id;
            });
            setGoals(newGoals);
            setIsDeletePopUpOpen(false);
            return;
          }else{
            toast.error(response.message);
            return;
          }

       }catch(err){
          toast.error(err.message);
          return;
       }
    }
  return (
    <div className={styles.popup}>
         <p>Are you sure you want to delete {props.goal.goal_name}!</p>
         <div className={styles.btns}>
            <button onClick={()=> props.setIsDeletePopUpOpen(false)} className={styles.clBtn}>Cancel</button>
            <button onClick={handleDeleteGoal}>Delete</button>
         </div>
    </div>
  )
}

export default DeleteGoalPopUp;
