import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DayList(){
  const[days, setDays] =useState([])


  // useEffect(함수, []) --> 초기 화면 렌더링이후 한번만 실행! 
  // 즉, 렌더링이후,  json 데이터를 한번 가져옴 
  useEffect(()=>{
    fetch("http://localhost:4000/days")
    .then(res => {return res.json();})
    .then(data => {setDays(data);})
  },[]);


  return(
    <ul className="list_day">
        {days.map( day =>(
          <li key={day.id}> 
           <Link to ={`/day/${day.day}`}> Day {day.day} </Link>
          </li>
        ))}
    </ul>
  )
}


