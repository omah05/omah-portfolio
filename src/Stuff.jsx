import { useState } from 'react'
import './stuff.css'
import me from './mages/greenn.png'
import me1 from './mages/menu.png'
import { TiThMenuOutline } from "react-icons/ti";
const Stuff = () => {
    return (  
        <>
            <div className="hide-on-med-and-down">
            <br /><br /><br />
         <div className="row">
            <div className="col l6 m6 s12">
                <h1 style={{textAlign:'left', fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}> I build and <br /> design stuffs.</h1>
                <h3 style={{fontWeight:'400', fontSize:'22px', textAlign:'left'}}> Open source projects, web apps and <br /> experimentals.</h3> <br /><br /><br />
                 <button className='btn white black-text ' style={{border:'2px solid #a2d431',  paddingLeft:'27px', borderRadius:'20px ' ,boxShadow:'1px 1px 1px '}}> SEE MY WORK </button>
            </div>
            <div className="col l6 m6 s12">
                <h1 style={{textAlign:'left', fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}>I write, <br /> sometimes</h1>
                <h3 style={{fontWeight:'400', fontSize:'22px' , textAlign:'left'}}>About design, frontend dev,learning and <br /> life.</h3> <br /><br /><br />
                <button className='btn white black-text '  id='second' style={{border:'2px solid #a2d431',  paddingLeft:'20px' , borderRadius:'20px ',boxShadow:'1px 1px 1px '}}>READ MY ARTICLE</button>

            </div>
        </div>

        <div className="row">
            <div className="col l2 m2 s2"> <br /> <br /><br />
            
            </div>
            <div className="col l8 m8 s8 "> <br /><br /><br /><br />
                <h1 style={{color: '#a2d431' , fontWeight:'500'}}>Send me a message</h1>
                <h4>Got a question or proposal, or just want <br /> to say hello? Go ahead.</h4> <br /><br /><br />
                <form>
                    <div className="row">
                        <div className="col l6 s6 m6">
                        <label htmlFor="">Your Name</label>
                        <input type="text"  placeholder='Enter Your Name'/>
                        </div>
                        <div className="col l6 s6 m6">
                        <label htmlFor="">Your Address</label>
                        <input type="text"  placeholder='Enter Your Address'/>
                        </div>
                    </div> <br /><br /><br />

                    
                    <label htmlFor="" style={{textAlign:'left'}}>Your Message</label>
                    <textarea  placeholder='say something'></textarea>
                     <br /><br /><br /><br />
                    <button style={{paddingLeft:'90px', paddingRight:'90px', paddingBottom:'20px', paddingTop:'20px' , borderRadius:'20px '}}>SUBMIT</button>

                </form>
            </div>
            <div className="col l2 m2 s2"> <br /><br /><br /><br />
            
            </div>
        </div>

            <div style={{backgroundColor:'#a2d431',marginLeft:'-235px', width:'139.5%', marginRight:'-269px'}}>
                    <div className="row">
                        
                        <div className="col l8 m8 s8">

                        </div>
                        
                            
                            <div className="container" style={{textAlign:'center'}}>
                            <table style={{marginLeft:'x'}}>
                                <th>
                                    <tr>
                                        <td style={{fontSize:'30px', fontWeight:'400'}}>SAY HELLO</td> 
                                    </tr>
                                    <td style={{color:'#ccf381' , fontSize:'25px'}}>hello@omah.dev</td> <br />
                                    <td style={{color:'#ccf381' , fontSize:'25px'}}>t.me/mrsomah</td> 
                                </th>
                                <th>
                                    <tr>
                                        
                                    </tr>
                                    <td style={{color:'#ccf381', fontSize:'20px'}}>My Work</td> <br />
                                    <td style={{color:'#ccf381' , fontSize:'20px'}}>My Shelf</td> <br />
                                    <td style={{color:'#ccf381' , fontSize:'20px'}}> My libary </td><br />
                                </th>
                                <th>
                                    <tr>
                                   
                                    </tr>
                                </th>
                            </table> <hr style={{width:'75%'
                                
                            }} />
                            </div>

                            <div className="row">
                                <div className="col l3 m3 s3">
                                    <h5 style={{color:'#ccf381'}}>© omah omahhh 2024</h5>
                                </div>
                                <div className="col l5 m5 s5">

                                </div>
                                <div className="col l4 m4 s4">
                                        <div className="row">
                                            <div className="col l1 m1 s1">
                                            <span style={{color:'#ccf381' , fontSize:'25px'}}>TT</span>
                                            </div>
                                            <div className="col l1 m1 s1">
                                            <span style={{color:'#ccf381' , fontSize:'25px'}}>GH</span>
                                            </div>
                                            <div className="col l1 m1 s1">
                                            <span style={{color:'#ccf381' , fontSize:'25px'}}>LN</span>
                                            </div>
                                            <div className="col l1 s1 m1">
                                            <span style={{color:'#ccf381' , fontSize:'25px'}}>YT</span>
                                            </div>
                                        </div>
                                       
                                        
                                       
                                       
                                </div>
                            </div>









                    </div>






            </div>
            </div>
            







            <div className="hide-on-large-only">
            <div className="container">
                <h1 style={{textAlign:'left', fontSize:'50px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}> I build and <br /> design stuffs.</h1>
                <h3 style={{fontWeight:'400', fontSize:'19px', textAlign:'left'}}> Open source projects, web apps and <br /> experimentals.</h3> <br /><br /><br />
                 <button className='btn white black-text ' style={{border:'2px solid #a2d431',  paddingLeft:'27px', borderRadius:'20px ' ,boxShadow:'1px 1px 1px '}}> SEE MY WORK </button>
            </div> <br />
                                <hr />
            <div className="container">
                <h1 style={{textAlign:'left', fontSize:'50px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}>I write, <br /> sometimes</h1>
                <h3 style={{fontWeight:'400', fontSize:'19px' , textAlign:'left'}}>About design, frontend dev,learning and <br /> life.</h3> <br /><br /><br />
                <button className='btn white black-text '  style={{border:'2px solid #a2d431',  paddingLeft:'20px' , borderRadius:'20px ',boxShadow:'1px 1px 1px '}}>READ MY ARTICLE</button>

            </div>


            <div className="container"> <br /><br /><br /><br />
                <h3 style={{color: '#a2d431' , fontWeight:'500'}}>Send me a message</h3>
                <h6>Got a question or proposal, or just want <br /> to say hello? Go ahead.</h6> <br /><br /><br />
                <form>
                    <div className="row">
                        <div className="col l6 s6 m6">
                        <label htmlFor="">Your Name</label>
                        <input type="text"  placeholder='Enter Your Name'/>
                        </div>
                        <div className="col l6 s6 m6">
                        <label htmlFor="">Your Address</label>
                        <input type="text"  placeholder='Enter Your Address'/>
                        </div>
                    </div> <br /><br /><br />

                    
                    <label htmlFor="" style={{textAlign:'left'}}>Your Message</label>
                    <textarea  placeholder='say something'></textarea>
                     <br /><br /><br /><br />
                    <button style={{paddingLeft:'70px', paddingRight:'70px', paddingBottom:'10px', paddingTop:'10px' , borderRadius:'20px '}}>SUBMIT</button>

                </form>
            </div> <br />
            




            <div style={{backgroundColor:'#a2d431'}}>
                    <div className="row">
                        
                        <div className="col l8 m8 s8">

                        </div>
                        
                            
                            <div className="container" style={{textAlign:'center'}}>
                            <table style={{marginLeft:''}}>
                                <th>
                                    <tr>
                                        <td style={{fontSize:'22px', fontWeight:'400'}}>SAY HELLO</td> 
                                    </tr>
                                    <td style={{color:'#ccf381' , fontSize:'15px'}}>hello@omah.dev</td> <br />
                                    <td style={{color:'#ccf381' , fontSize:'15px'}}>t.me/mrsomah</td> <br /> 
                                    <td style={{color:'#ccf381', fontSize:'15px'}}>My Work</td> <br />
                                    <td style={{color:'#ccf381' , fontSize:'15px'}}>My Shelf</td> <br />
                                    <td style={{color:'#ccf381' , fontSize:'15px'}}> My libary </td><br />
                                </th>
                                <th>
                                    <tr>
                                        
                                    </tr>
                                    
                                </th>
                                <th>
                                    <tr>
                                   
                                    </tr>
                                </th>
                            </table> <hr style={{width:'75%'
                                
                            }} />
                            </div>

                            <div className="row">
                                
                                    <h6 style={{color:'#ccf381'}}>© omah omahhh 2024</h6>
                               
                                
                               
                            </div>









                    </div>






            </div>

            </div>




            
            
         
        </>
        
    );
}
 
export default Stuff;