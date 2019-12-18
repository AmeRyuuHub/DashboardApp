import React from 'react';
import { Jumbotron, Container, Button,Form} from 'react-bootstrap';





const MacForm = (props) => {
return (
   <div>
  
    

<Jumbotron fluid className="jstb-info ">
   <Container fluid className="text-center secondConteiner">
   
 <p>Введите MAC адрес STB (0-9, A-f) </p>
   <Form inline onSubmit={props.getInfo}   className="justify-content-center">
 
  
      
      <Form.Control 
      required
      type="text"
      name="mac"
      placeholder="00:00:00:00:00:00"
      maxLength={16} minLength={12}
      className="mr-sm-2"
     
      
     
     
     
      />
        <Button type="submit">Get Info</Button>

  
</Form>

  </Container>
</Jumbotron>
</div>

)
}

export default MacForm;