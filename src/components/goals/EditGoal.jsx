import React, { useState } from 'react';
import styles from "../../styles/editgoalpopup.module.css";
import { toast } from 'react-toastify';
import { deleteGoal } from '../../api';

const EditGoalPopUp = (props) => {
    let {goals, goal, setGoals, setIsEditPopUpOpen} = props;
    const [goalName, setGoalName] = useState(goal?.goal_name);
    const [requiredHour, setRequiredHour] = useState(goal?.required_hours);
    const [esComDate, setEsComDate] = useState(goal?.estimated_completion_date);

    


    const handleGoalEdit = async()=>{
       try{
        let goal_id = goal?._id;
        if(!goal_id){
            toast.error("Goal id not Found!");
        }
        let editBody = {
            goal_id,

        }

       }catch(err){
        toast.error(err.message);
        return;
       }
    }

  return (
    <div className={styles.popup}>
         
         <div className={styles.btns}>
            <button onClick={()=> props.setIsEditPopUpOpen(false)} className={styles.clBtn}>Cancel</button>
            <button onClick={handleGoalEdit}>Edit</button>
         </div>
    </div>
  )
}

export default EditGoalPopUp;
