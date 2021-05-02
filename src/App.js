import {useState, useEffect} from "react";
import Banner from  './Banner';
import { Container } from 'react-bootstrap';
import Navbar from './NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from "./Blogs";


const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
      blogsCollection{
        total   
      }
    }
  }
}
`
const styles ={
  title:  {
    display:'flex',
   justifyContent:'space-between',
   width: '100%',
   paddingLeft: '1rem',
   paddingRight: '1rem'
  }
}
function App() {
  
   // define the initial state
   const [page, setPage] = useState(null);
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
        setPage(data.pageCollection.items[0]);
        //debugger;
      });
  }, []);
   // show a loading screen case the data hasn't arrived yet
   if (!page) {
     return "Loading...";
   }
  return (
    <Router>
      <Navbar/>
      <Switch>
       <Route path="/">
          <Home page={page}/>
        </Route> 
        
     </Switch>
    </Router>
  );
}

const Home=(props) => {
  return(
    <Container fluid className="App-header align-top">
          <div className="container" style={styles.title} >
            <div>{props.page.title}</div>
            <div>{props.page.blogsCollection.total}</div>
          </div>
          <Banner bannerUrl={props.page.logo.url}/>
          <Blogs/>
        </Container>
  )
}

export default App;
