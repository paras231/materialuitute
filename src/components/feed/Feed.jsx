import React from 'react';
import useStyles from './style'

import Post from '../post/Post'
const Feed = ()=>{

    const classes = useStyles();
   return(
       <>

       
   <Post/>
   <Post/>
   <Post/>
   <Post/>
       </>
   )
}


export default Feed;