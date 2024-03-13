import React, { useEffect, useState } from 'react';
import img from '../assets/goalsetter.png';
import styles from  '../styles/goals.module.css';
import { useAuth } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { createGoal, getGoalsOfUser } from '../api';
import { toast } from 'react-toastify';
import NormalLoader from "../components/NormalLoader";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import DeleteGoalPopUp from "../components/goals/DeleteGoalPopUp";
import EditGoalPopUp from '../components/goals/EditGoal';

const Goal = () => {
    const [requiredHour, setRequiredHour] = useState("");
    const [goalName, setGoalName] = useState("");
    const [esComDate, setEsComDate] = useState("");
    const [isGoalModelOpen, setIsGoalModelOpen] = useState(false);
    const [goals, setGoals] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const [goalLoading, setGoalLoading] = useState(true);
    const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);
    const [isEditPopUpOpen, setIsEditPopUpOpen] = useState(false);
    const [targetGoal, setTargetGoal] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();



    useEffect(()=>{

        if(!auth.user){
           navigate("/");
        }
        getAllGoals();
        

    }, [auth.user]);



    const getAllGoals = async()=>{
        try{
          const response = await getGoalsOfUser();
          if(response.success){
             setGoals(response.data);
             setGoalLoading(false);
          }else{
            toast.error(response.message);
            setGoalLoading(false);

          }
        }catch(err){
            toast.error(err.message);
            setGoalLoading(false);

        }
    }
    const handleGoalSubmit = async(e)=>{
        e.preventDefault();
        if(goalName === "" || requiredHour === "" || esComDate === ""){
            toast.error("All feilds Required!");
            return;
        }
        let rHour = parseFloat(requiredHour);
        if(isNaN(rHour)){
            toast.error("required_hours should be Number Only!");
            return;
        }
        let apiBody = {
            "required_hours": requiredHour,
            "goal_name": goalName,
            "estimated_completion_date": esComDate
        }

        setBtnLoading(true);

        try{
           let response = await createGoal(apiBody);
           if(response.success){
              toast.success(" Yup goal created successfulluy!")
              let data = response?.data;
              let goalDoc = {
                "_id": data._id,
                "required_hours": data.required_hours,
                "goal_name": data.goal_name,
                "estimated_completion_date": new Date(data.estimated_completion_date),
                "isDefault": data.isDefault,
                "completed_hour": 0,
                "percentage": "0.00"
              }
              goalDoc.estimated_completion_date = goalDoc.estimated_completion_date.toDateString();
              goals.push(goalDoc);
              setBtnLoading(false);
              setIsGoalModelOpen(false);

              setEsComDate("");
              setRequiredHour("");
              setGoalName("");
              return;

           }else{
              toast.error(response.message);
              setBtnLoading(false);
              setEsComDate("");
              setRequiredHour("");
              setGoalName("");
              return;
           }
        }catch(err){
              setBtnLoading(false);
              toast.error(err.message);
              setEsComDate("");
              setRequiredHour("");
              setGoalName("");
              return;
        }
    }


  return <>
    <div className="container">
      
      <div className={styles.goalNav}>
          <button onClick={()=> setIsGoalModelOpen(!isGoalModelOpen)} className={styles.goalbtn}>
            Create New Goal
          </button>
      </div>

      <div className={styles.goalBox}>
          <div className={styles.goalHeading}>
             <h2>Goals</h2>
          </div>
          <div className={styles.goalContent}>

         
         {goalLoading? 
         <NormalLoader/>
         : 
        <>
        {goals.length === 0 && <p className={styles.noGoal}>No Goals For Now...</p>}

        {goals.map((goal)=> 
        
           <div  key={goal._id} style={goal.isDefault ? { backgroundColor: 'rgb(198, 250, 198)' } : {}}  className={styles.goal}>
              <h2  className={styles.goalname}>{goal?.goal_name}</h2>
              <p className={styles.targetHour}>{goal?.required_hours}
                <br/>
                <span>Target Hour</span>
              </p>
              <p className={styles.targetHourDone}>{goal?.completed_hour}
                <br/>
                <span>TH Done</span>
              </p>
              <p className={styles.targetHourDone}>{goal?.estimated_completion_date}
              <br/>
                <span>Estimated Complition Date</span>
              </p>
              <p className={styles.targetHourDone}>{goal?.percentage}%
                <br/>
                <span>TP Done</span>
              </p>
              <div className={styles.goalBtns}>
                 <FaRegEdit onClick={()=>{
                  setTargetGoal(goal);
                  setIsEditPopUpOpen(true);
                 }} className={styles.edIcon} />


                 <MdDeleteOutline onClick={()=>{
                  setTargetGoal(goal);
                  setIsDeletePopUpOpen(true);
                 }} className={styles.delIcon} />


              </div>
          </div>)}
        </>
         }
          
          </div>
      </div>

    </div>

    {isGoalModelOpen &&  <div className={styles.modelGoal}>
        <h3>Goal Form</h3>
        <form>
           
            <input type='text' value={goalName} placeholder='Enter Goal Name' onChange={(e)=> setGoalName(e.target.value)}></input>
            <input type='text' value={requiredHour} placeholder='Enter Target Hours' onChange={(e)=> setRequiredHour(e.target.value)}></input>
            <input type='date' value={esComDate} onChange={(e)=> setEsComDate(e.target.value)}></input>

             <div className={styles.btns}>
              <button onClick={()=> setIsGoalModelOpen(!isGoalModelOpen)} className={styles.closeBtn}>Close</button>


              {btnLoading? 
                <button type='button'  disabled >Creating Goal...</button>
              :
              <button type='button'  onClick={handleGoalSubmit} >Create Goal</button>
              }
             
             </div>
        </form>
    </div>}

    {isDeletePopUpOpen && <DeleteGoalPopUp 
    setIsDeletePopUpOpen={setIsDeletePopUpOpen}
    goal={targetGoal}
    goals = {goals}
    setGoals = {setGoals}
    />}

    {isEditPopUpOpen && <EditGoalPopUp
      setIsEditPopUpOpen = {setIsEditPopUpOpen}
      goal = {targetGoal}
      goals = {goals}
      setGoals = {setGoals}
    />}
     
   
  </>
}

export default Goal;
