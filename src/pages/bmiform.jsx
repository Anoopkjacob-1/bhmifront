import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import BmiDisplay from "../components/BmiDisplay";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const radioOptions = [
  { key: "male", value: "male" },
  { key: "female", value: "female" },
];

const initialValues = {
  age: "",
  height: "",
  weight: "",
  gender: "",
};

const validationSchema = Yup.object({
  age: Yup.number("Eneter Valid Age")
    .min(1, "Enter Valid Age")
    .max(120, "Enter Valid Age")
    .required("Required"),
  height: Yup.number("Eneter Valid Age")
    .min(1, "Enter Valid Height")
    .max(300, "Enter Valid Height")
    .required("Required"),
  weight: Yup.number("Eneter Valid Age")
    .min(1, "Enter Valid Weight")
    .max(600, "Enter Valid Weight")
    .required("Required"),
  gender: Yup.string().required("Required"),
});

const Bmiform = ({setrefresher,refresher}) => {
  const [bmi, setbmi] = useState(0);

  const onSubmit = async (values) => {
    try {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/app/usersave`, { ...values })
        .then((resp) => {
          console.log(resp);
          if (resp.data.message === "user saved") {
            setbmi(resp.data.data);
            setrefresher(!refresher)
          } else {
            setbmi(0);
          }
        });
    } catch (e) {
      console.log(e.data);
    }
  };

  return (
    <div className="d-flex flex-column bd-highlight">
      <div className="p-1 flex-fill bd-highlight">
        <Container fluid="sm" className="mainconatiner ">
          <Row className="d-flex justify-content-center">
            <Col style={{ maxWidth: "50%" }} className="mt-4 p-4">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => (
                  <Form className="p-1 dflex justify-content-center-">
                    <h4> BMI</h4>
                    <FormikControl
                      label="Age"
                      control="input"
                      type="text"
                      placeholder="Enter Age"
                      name="age"
                    />

                    <div>
                      <FormikControl
                        name="gender"
                        control="radio"
                        label="Gender"
                        options={radioOptions}
                      />
                    </div>

                    <FormikControl
                      label="Height (cm)"
                      control="input"
                      type="text"
                      placeholder="Enter Height (cm)"
                      name="height"
                    />

                    <FormikControl
                      label="Weight (kg)"
                      control="input"
                      type="text"
                      placeholder="Enter  Weight (kg)"
                      name="weight"
                    />

                    <Button variant="success" type="submit" className="m-4">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="p-1 flex-fill bd-highlight">
        <BmiDisplay bmi={bmi}  />
      </div>
    </div>
  );
};
export default Bmiform;
