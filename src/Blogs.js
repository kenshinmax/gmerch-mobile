import React from 'react';
import {useState, useEffect} from 'react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const query = `
{
    blogPostCollection{
        items{
          title
        }
      }
}
`
const blogStyles ={
    blogList:{
        width: '100%',
        listStyleType:'none'
    },
    blogHeader:{
        marginTop:'1rem',
        color:'#000'
    }
}
function Blogs() {
// define the initial state
const [posts, setPosts] = useState(null);
  useEffect(() => {
 window
   .fetch(SERVER_URL, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       // Authenticate the request
       Authorization: "Bearer " + CLIENT_ID,
     },
     // send the GraphQL query
     body: JSON.stringify({ query }),
   })
   .then((response) => response.json())
   .then(({ data, errors }) => {
     if (errors) {
       console.error(errors);
     }
     
     // rerender the entire component with new data
     setPosts(data.blogPostCollection);
   
   });
  }, []);
// show a loading screen case the data hasn't arrived yet
  if (!posts) {
  return "Loading...";
  }
    return(
    <div className="container" style={blogStyles.blogHeader}>
     <div className="card" style={blogStyles.blogList}>
     <div className="card-body">
        <h3 className="card-title">Latest Blogs</h3>
        <p clasclassNames="card-text">
            Creating and delivering content is quick and easy
            when you work with Contentful.</p>
     </div>
       
     </div>
     <div className="card mt-2">
     <ul class="list-group list-group list-unstyled mt-2">  
           {posts.items.map(item => 
              <li className="list-group-item mb-1"> {item.title}</li>
           )}
       
       </ul>
       </div>
     </div>
     
    )
}

export default Blogs;