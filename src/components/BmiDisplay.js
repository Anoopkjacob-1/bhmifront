import React ,{useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";

import { ImHappy,ImCrying2,ImSad2 } from "react-icons/im"; //healthy ,underweight , obses
import { HiOutlineEmojiSad } from "react-icons/hi"; //overwight

const BmiDisplay=({bmi})=> {
const [text, settext] = useState("")


useEffect(() => {
if(bmi===0)
{
return settext("BMI value is ZERO")
}
else if(bmi>=30.0)
{
    return  settext("Obese");
}
else if(bmi<=29.0 && bmi>=25.0)
{
    return  settext("Overweight");
}
else if(bmi<=24.9 && bmi>=18.5){
    return  settext("Healthy");
}
else{
    return  settext("Underweight");
}  
}, [bmi])


    return (
      
        <Container>
           <Row className="d-flex justify-content-center" >
                <Col style={{maxWidth:"50%"}} className="mt-4 p-4" >
                  <h4> You'r BMI VALUE:{bmi}   </h4> 
                   <br/>
                   <h3>you'r {text}  {text==="Obese" 
                   ?
                   <ImSad2/>
                    :text==="Overweight"
                     ?
                   <HiOutlineEmojiSad/>
                   :text==="Healthy"
                   ?
                   <ImHappy/>
                   :text==="Underweight"
                  ?
                   <ImCrying2/>
                   :
                   ""
                }  </h3>
                </Col>
            </Row>
        </Container>
        
    );
}

export default BmiDisplay
