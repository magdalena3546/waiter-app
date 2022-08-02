import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link }from 'react-router-dom'

const TableDescription = props => {
  return(

  <Card className="border-0 border-bottom">
  
      <Card.Body className = "d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center'>
          <Card.Title as="h3">Table {props.id}</Card.Title>
          <Card.Text className ="mx-4"><strong>Status: </strong>{props.status}</Card.Text>
        </div>
        <Button variant="primary" as={Link} to={`/tables/${props.id}`}>Show more</Button>
      </Card.Body>
  </Card>
   
  )
};

export default TableDescription;