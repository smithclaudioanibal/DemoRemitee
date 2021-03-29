import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { makeUseAxios } from 'axios-hooks'
import { BASE_URL } from "../../api/constants";

function Exchange()  {

    const [peso, setPeso] = useState(0.0);
    
    const useAxios = makeUseAxios({
        axios: axios.create({ baseURL: BASE_URL })
      })
      
    const [{ data, loading, error }, refetch] = useAxios(
        'PesoToDollar?peso=' + (peso == '' ? '0.0' : peso)
      );
    
    const handleChangePeso =(event)=>{
            setPeso(event.target.value);
    };
    
    const handleClick = () => {
        refetch();
    };

    
    return (
        <>
        {/* {loading && (<p>Loading...</p>)} */}
        {error && (<p>Cannot connect to api server</p>)}
        <Container>
            <h4>Insert Exchange Data</h4>
            <Form>
                    <Form.Row className="align-items-center">
                        <Col sm={4} className="my-1">
                        <Form.Label htmlFor="txtARMoney" srOnly>
                            $ AR - Money
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value={peso} type="number" onChange={handleChangePeso}
                            min="1.0" id="txtARMoney" placeholder="$" />
                        </InputGroup>
                        </Col>
                        <Col sm={4} className="my-1">
                        <Form.Label htmlFor="lblDollars" srOnly>
                            u$d Dollar
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>U$D</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl disabled value={!loading && data.dollar} type="text"  
                                            min="0.0"  id="txtDollars" placeholder="U$D" />
                        </InputGroup>
                        </Col>
                        <Col sm={4}>
                            {/* <Button variant="primary" type="submit" onclick={handleClick}>
                                Calculate
                            </Button> */}
                        </Col>
                    </Form.Row>
            </Form>
        </Container>
        </>
    );
}

export default Exchange;