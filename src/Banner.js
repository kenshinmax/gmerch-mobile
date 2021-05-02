import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const JumboBanner = (props) => {
    let styles = (props === null? '': props.type);
    const type = (props === null? 'container': props.type);
    let burl = (props === null ? '': props.bannerUrl);
    let title = (props === null ? 'Hello, everyone!' : props.title);
    let message = (props === null ? 'This is my collection' : props.message );
    let label = (props === null ? 'Check it out!' : props.label );
    const bStyle = {
        objectFit: 'cover',
        width: '100%'
    }
    
    const ShowJumboTron = () =>{
        return (
            <Jumbotron className={styles} style={{padding:'none !important', margin: 'none'}}>
               {!burl ? '': <img style={bStyle} alt="img" src={burl} />} 
                 <h1>{title}</h1>
                  <p>
                    {message}
                  </p>
                  <p>
                    <Button variant="secondary">{label}</Button>
                  </p>
            </Jumbotron>
        )
    }
    
    const ShowContainer = () => {
        return (
            <div className='container'>
              {!burl ? '': <img style={bStyle} alt="img" src={burl} />} 
            </div>
        )
    }
    
    return(   
       <>
          {type?<ShowJumboTron/>:<ShowContainer/>}
       </>      
    ) 
}

export default JumboBanner;