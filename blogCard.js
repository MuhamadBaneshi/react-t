import React from "react";
import { dumpLogs } from "./Utils";
//import { Component } from "react";
import classes from './BlogCard.module.css'

//class BlogCard extends Component {
    const BlogCard = (props) => {

    

//onLikeBtnClick = () => {
   // this.setState((prevState, prevProp) => {
    
  //  return {LikeCount: prevState.LikeCount + 1}
//});
//}
    
        dumpLogs(props);
        return (
            <div className={classes.BlogCard}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>

                <p>Like Count: <span className={classes.LikeCount}>{props.LikeCount}</span></p>
                <button onClick={props.onLikeBtnClick}>Like</button>
            </div>
        )
    
}

export default BlogCard;