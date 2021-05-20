import Card from "./Card";
import {useState} from "react";

function Content(props) {







 return <div className="content">{
     props.arr.map((item)=>{

     return (<Card image={item.image} name={item.name} price={item.price} arr={props.arr}
                   setBought={props.setBought}
     />);
     })
 }
 </div>




}
export default Content;