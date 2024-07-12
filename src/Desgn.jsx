import { useState } from 'react'
import me from './mages/greenn.png'
import me1 from './mages/menu.png'
import { TiThMenuOutline } from "react-icons/ti";
const Desgn = () => {
    return (
        <>
            <div className="hide-on-med-and-down">
            <div style={{marginTop:'-690px'}}>
            

            <div className=" container row">
                <div className="col l6 m6 12">
                    <div style={{textAlign:'left'}}>
                    <h1 style={{textAlign:'left', fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}>Engineering</h1>
                    <span style={{fontWeight:'400', fontSize:'22px', textAlign:'left'}}>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them <br /> to <span  style={{textAlign:'left', marginRight:'59px'}}>deliver fast, resilient solutions optimized for scale —</span> <span  style={{textAlign:'left', marginRight:'65px'}}>  performance and scalabilty are priorities on my radar.</span></span>
                    </div>
                </div>
                <div className="col l6 m6 s12">
                     
                </div>
            </div>

            <div className=" container row">
                <div className="col l6 m6 12">
                    
                </div>
                <div className="col l6 m6 s12">
                <div style={{textAlign:'left'}}>
                <h1 style={{textAlign:'left', fontSize:'70px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}>Design</h1>
                <span style={{fontWeight:'400', fontSize:'22px'}}>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. I'm committed to creating fluent user experiences while staying fashionable.</span>
                </div>
                </div>
            </div>
        </div>
            </div>



            <div className="hide-on-large-only">
                <div className="container">
                        <div style={{textAlign:'left'}}>
                        <h1 style={{textAlign:'left', fontSize:'50px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}>Engineering</h1>
                        <span style={{fontWeight:'500', fontSize:'19px', textAlign:'left'}}>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them  to deliver fast, resilient solutions optimized for scale —   performance and scalabilty are priorities on my radar.</span>
                        </div>
                </div>

                <div className="container">
                    <div style={{textAlign:'left'}}>
                    <h1 style={{textAlign:'left', fontSize:'50px', fontFamily:'SF UI Text helvetica neue', fontWeight:'700',color:'#a2d431'}}>Design</h1>
                    <span style={{fontWeight:'500', fontSize:'19px'}}>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. I'm committed to creating fluent user experiences while staying fashionable.</span>
                    </div>
                </div>
            </div>

            



        
        </>
      );
}
 
export default Desgn;