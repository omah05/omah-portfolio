import { useState } from "react";
import './Header.css'
import me1 from './mages/menu.png'
import { TiThMenuOutline } from "react-icons/ti";
import mee from './mages/ch.jpg'



const Header = () => {
    return (
        <>
           <div  className="hide-on-med-and-down">
            
           <div className="row" style={{backgroundColor:'#ccf381' ,margin:'-8px', marginTop:'-60px',marginLeft:'-235px',  height:'100vh'}}>
                <div className="container">
                <div className=" col l8 m8 s12"> <br /> <br /> 
                    <h3 style={{color:'#a2d431', fontWeight:'500',  marginLeft:'-600px', fontFamily:'SF UI Text helvetica neue' }}>Omah</h3> <br /><br /><br /><br />
                    <div className="row">
                        <div className="col l12 m12 s12">
                            <span style={{fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700', color:'#a2d431', marginLeft:'-470px'  }}>Frontend </span> <br />
                            <span style={{fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700', color:'#a2d431', marginLeft:'-450px'  }}> Developer</span> <br />

                            <span style={{fontSize:'30px', fontWeight:'400',  marginLeft:'-89px'  }}>I like to craft solid and scalable frontend products </span> <br />
                            <span style={{fontSize:'30px', fontWeight:'400',  marginLeft:'-386px'  }}> with great user experiences.</span> <br /> <br /> <br /><br /><br /><br />   
                            
                            <div className="row" style={{marginLeft:'-50px'}}>
                                <div className="col l6">
                                <span style={{ fontWeight:'500', fontSize:'20px', marginRight:'-90px'}}> Highly skilled at progressive <br /> 
                               <span style={{ fontWeight:'500', fontSize:'20px', marginRight:'-35px'}} > enhancement, design systems & </span> <br />
                                <span style={{ fontWeight:'500', fontSize:'20px', marginRight:'205px'}}>UI Engineering.</span> </span>
                                </div>
                                <div className="col l6">
                                <div  style={{textAlign:'left'}}>
                                <span  style={{ fontWeight:'500', fontSize:'20px'}}> Proven experience building successful <br />  products for clients across several countries.</span>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                        <div className="col l4 m4 s12" style={{backgroundColor:'#a2d431' , height:'100vh',marginTop:'-790px', marginLeft:'1200px', height:'102.2vh' }}> <br /><br />
                            <br /> <br />  <TiThMenuOutline  style={{fontSize:'50px',color:'#ccf381'}}/> <br /><br /><br /><br /><br /><br /><br />

                                           
                                        





















                        </div>
            </div>
           
           </div>






               <div className="hide-on-large-only">
               <div style={{backgroundColor:'#ccf381', marginTop:'-30px', width:'100%'}}>
                    <div className="row">
                        <div className="col l6 m6 s6">
                            <h4 style={{fontFamily:'SF UI Text helvetica neue', color:'#a2d431'}}>Omah</h4>
                        </div>
                        <div className="col  l6 m6 s6"> <br />
                            <TiThMenuOutline  style={{fontSize:'30px',color:'#a2d431'}}/>
                        </div>
                    </div>

                    
                    <div >
                    <span style={{fontSize:'40px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700', color:'#a2d431'  }}>Frontend </span> <br />
                    <span style={{fontSize:'40px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700', color:'#a2d431' }}> Developer</span> <br /> <br />
                    <div className="container" style={{textAlign:'left'}}>
                        <span style={{fontSize:'25px', fontWeight:'400'  }}>I like to craft solid and  br
                            scalable frontend products </span> <br />
                        <span style={{fontSize:'25px', fontWeight:'400'  }}> with great user experiences.</span> <br /> <br /> <br /><br /><br /><br />  
                    </div>
                    
                    
                    </div>

                    <div className="row" >
                                <div className="col l6 s6 m6" style={{textAlign:'left'}}>
                                <span style={{ fontWeight:'500'}}> Highly skilled at progressive  
                               enhancement, design systems &  
                               UI Engineering. </span>
                                </div>
                                <div className="col l6 s6 m6" style={{textAlign:'left'}}>
                                <div >
                                <span  style={{ fontWeight:'500'}}> Proven experience building successful <br />  products for clients across several countries.</span>
                                </div>
                                </div>
                    </div> <br /><br />

                    <div style={{backgroundColor:'#a2d431' , height:'370px' }}> 
                    <img src={mee} alt=""  style={{width:'50%', objectFit:'cover', height:'369px'}}/> 
                    </div>
                </div>
           




           
            
               </div>
        </>
      )
}
 
export default Header;