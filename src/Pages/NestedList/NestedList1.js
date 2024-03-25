// NestedList.js
import React, { useEffect, useState } from 'react';
import './NestedList.css'; // Importing CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';




const NestedList1 = ({ items,list}) => {
  const [expanded, setExpanded] = useState();
  const[level1,setLevel1]=useState()
  const[idx,setIdx]=useState()

  
  const handleLevel=(index)=>{
    if(level1===index){
      setLevel1()
    }else{
      setLevel1(index);
    }
  }
  const toggleItem = (index) => {
    if(expanded===index){
      setExpanded()
    }else{
      setExpanded(index);
    }
  };

   return(
    <div className={`main-list-${list}`}>
    {items.map((item,index)=>(
          <div key={index}>
            <div
          className="list-item"
          onClick={() => {toggleItem(index);handleLevel(index);setIdx(index)}}
          key={index}
        >
          <FontAwesomeIcon  icon={expanded===index? faFolderOpen : faFolder} 
          style={{ color:"rgb(73, 173, 255)" }}/>
            <span>  {item.name}</span>
            
             
        </div>
        {level1===index?<div style={{display:idx===index?"block":"none"}}>
          <NestedList1 items={item.child}
          list={list+1}
          ></NestedList1>
        </div>:""}
          </div>


      ))}
    </div>
   )
  };
  

  export default  NestedList1