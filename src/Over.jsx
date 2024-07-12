import { useState } from 'react'
import me2 from './mages/anoda.jpg'
const Over = () => {
    return (
        <>
             <div className="hide-on-med-and-down">
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <div className="row" style={{backgroundColor:'#ccf381' ,margin:'-8px', marginTop:'-60px',marginLeft:'-235px',  height:'100vh', marginRight:'-235px'}}>
            <div className=" container col l6 "> <br />
              
               <div className="container">
               <h1 style={{fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431', textAlign:'left'}}>Over the years, </h1>
                <div style={{ textAlign:'left'}}>
                <span style={{fontWeight:'400', fontSize:'22px'}}>I've built products for companies and businesses around the globe <br /> ranging from marketing websites to complex solutions and enterprise  <br />apps with focus on fast, elegant and accessible user experiences.</span></div> <br /> <br />
                <div style={{ textAlign:'left'}}>
                <span style={{fontWeight:'400', fontSize:'22px'}}>Currently, I work at Shopify as a Senior Frontend Engineer crafting <br /> thoughtful and inclusive experiences that adhere to web  <br />standards for over 3 million merchants across the world.</span></div> <br /><br />
               <div style={{ textAlign:'left'}}> 
               <span style={{fontWeight:'400', fontSize:'22px'}} >I once also led the frontend team at Conectar,an e-learning startup <br /> through building multiple React <br />applications into a single robust learning platform.</span></div> <br /><br />
               <div style={{ textAlign:'left'}}>
               <span style={{fontWeight:'400', fontSize:'22px'}} >I once also led the frontend team at Conectar, an e-learning startup <br /> through building multiple React applications into  <br />a single robust learning platform.</span>
               </div>
               
               </div>
            </div>
            <div className="col l6">
                <img src={me2} alt=""  style={{height:'100vh'}}/>
            </div>
        </div>  
        </div>



            <div className="hide-on-large-only">
            <div className="" style={{backgroundColor:'#ccf381'}}>
            <div className="container">
               <h1 style={{fontSize:'50px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431', textAlign:'left'}}>Over the years, </h1>
                <div style={{ textAlign:'left'}}>
                <span style={{fontWeight:'400', fontSize:'19px'}}>I've built products for companies and businesses around the globe  ranging from marketing websites to complex solutions and enterprise  apps with focus on fast, elegant and accessible user experiences.</span></div> <br /> <br />
                <div style={{ textAlign:'left'}}>
                <span style={{fontWeight:'400', fontSize:'19px'}}>Currently, I work at Shopify as a Senior Frontend Engineer crafting <br /> thoughtful and inclusive experiences that adhere to web  standards for over 3 million merchants across the world.</span></div> <br /><br />
               <div style={{ textAlign:'left'}}> 
               <span style={{fontWeight:'400', fontSize:'19px'}} >I once also led the frontend team at Conectar,an e-learning startup  through building multiple React applications into a single robust learning platform.</span></div> <br /><br />
               <div style={{ textAlign:'left'}}>
               <span style={{fontWeight:'400', fontSize:'19px'}} >I once also led the frontend team at Conectar, an e-learning startup  through building multiple React applications into  a single robust learning platform.</span>
               </div>
               <img src={me2} alt=""  style={{height:'400px', width:'100%',objectFit:'cover'}}/>
               </div>
              
            </div>

            </div>
            






            
        </> 
     );
}
 
export default Over;