import React from "react";
import { Api } from "./Api";
import { useState  , useEffect} from "react";
import './style.css';

const CardStructure = () => {

const [apiData, setApiData] = useState([]); // State to store the data from that is coming from  the API


// Better to use this practice to use useEffect to fetch the data coming from the API
useEffect(()=>{
    Api()
    .then((data) => {
        console.log(data);
        setApiData(data);
    })
    .catch((error) => {
        console.error(error);
    });
} , [apiData])

// Mapping out all the data that is received from json api and rendering the data using html
return(
<>

<div className="parentCard">

{
    apiData.map((data) => {
        return(
            <div class="card"  style={{width: "20rem", height: "15rem"}}>
            <div class="card-body">
              <h5 class="card-title">Title: {data.title}</h5>
              <p class="card-text">Body: {data.body}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        )
    })  
}
</div>
</>
)

}

export default CardStructure;