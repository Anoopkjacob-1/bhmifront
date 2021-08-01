import React,{useEffect,useState} from 'react'
import {Container ,Row,Col} from "react-bootstrap";
import {Doughnut} from 'react-chartjs-2'
import axios from "axios"
import dotenv from "dotenv";
import labelfinder from '../utils/chartLabelFinder.js'
import DistinctCount from '../utils/chartDictinctCount.js'


dotenv.config();
export default function Chart({refresher}) {
const [DATA, setDATA] = useState([])

useEffect(() => {
    try {
      async function userdatfetch1() {
        await axios({
          method: "Get",
          url: `${process.env.REACT_APP_BASE_URL}/app/allusers`,
        }).then((resp) => {
          const response = resp.data;
          setDATA(response);
        });
      }
      userdatfetch1();
    } catch (e) {
      console.error(e);
    }
  }, [refresher]);

    return (
      <Container fluid="sm" className="mainconatiner ">
      <Row className="d-flex justify-content-center">
        <Col style={{ maxWidth: "80%",height:"50vh"}} className="mt-3 pt-4">
        <h4>BMI HISTORY Chart</h4>
        <br/>
            <Doughnut
             data={{
              labels:labelfinder(DATA),
                datasets: [{
                    label: '',
                    data: DistinctCount(DATA),
                    backgroundColor: [
                        'red',
                        'blue',
                        'green',
                        'yellow',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(245, 236, 66 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 2
                }]
             }}
             height={800}
             width={100}
             options={{
                 maintainAspectRatio:false,
                 
             }}
            />
    </Col>
          </Row>
        </Container>
    )
}
