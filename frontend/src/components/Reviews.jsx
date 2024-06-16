/*
    This is a container for reviews 
    this will contain recent reveiws on products
*/


import { useEffect } from "react";
import axios from "axios";
import React from "react";
import Review from "./Review";

export default function Reviews(){

    const [reviews,setReviews] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [err,setErr] = React.useState(false);

    useEffect(()=>{

        const fetchReview = async ()=>{
            try{
                const response = await axios.get('');
                setReviews(response.data);
            }catch(err){
                setErr(err);
            }finally{
                setLoading(false);
            }
        };

        fetchReview();

    },[]);

    if(loading)return <div className="loading">Loading...</div>

    if(err)return <div className="error">Error : {err.message}</div>

    return(
        <div className="reviews">
            <ul className="side-scroll">
                {reviews.map((review)=>{
                    return <Review review-details = {review}/>
                })}
            </ul>
        </div>
    )
} 