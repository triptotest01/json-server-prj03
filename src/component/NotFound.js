import { Link } from "react-router-dom";

export default function NotFound(){

  return(
    <>
      <h2> 잘못된 접근입니다.</h2>
      <Link to="/"> Go Back to Home </Link>  
    
    </>
  )
}