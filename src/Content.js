import Card from "./Card";
import {useState} from "react";

function Content(props) {

 return (<div className="content">

  {props.database.map((product) => {
   return (<Card product={product} database={props.database} setBought={props.setBought}/>)

  })}
  < /div>)

}
export default Content;