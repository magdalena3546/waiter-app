import PropTypes from 'prop-types';
import { Button, Form, Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllStatuses } from '../../../redux/statusesRedux';
import shortid from 'shortid';
import { useState } from 'react';
import styles from './TableForm.module.scss'
const TableForm = ({action, ...props}) => {
  const statuses = useSelector(getAllStatuses);
  const id = props.id;
 
  const [ status, setStatus ] = useState(props.status || '');
  const [ peopleAmount, setPeopleAmount] = useState(props.people || '' );
  const [ maxPeopleAmount, setMaxPeopleAmount ] = useState(props.maxPeople || '');
  const [ bill, setBill] = useState(props.bill || 0);
 

  const handleChangeStatus = e => {
    setStatus(e.target.value);
    if (e.target.value === "Cleaning" || e.target.value === "Free"){
      setPeopleAmount("0");
    }
    if (e.target.value === "Busy") {
      setBill("0");
    }
  };
  const handleChangeMaxPeopleAmount = e => {
    const value = Math.max(0, Math.min(10, Number(e.target.value)));
    setMaxPeopleAmount(value); 
    if(value < peopleAmount){
      setPeopleAmount(value);
    }
  };

  const handleChangePeopleAmount = e => {
    const value = Math.max(0, Math.min(maxPeopleAmount, Number(e.target.value)));
    setPeopleAmount(value); 
  };

  const handleSubmit = () => {
    action({id, status, peopleAmount, maxPeopleAmount, bill});
  };

    return(
      <form onSubmit={handleSubmit}>
        <h1>{`Table ${id}`}</h1>
        <Row className="my-2">
        <Col className={styles.col} xs='auto'>
          <Form.Label><strong>Status:</strong></Form.Label>
        </Col>
        <Col className={styles.col} xs='auto'>
          <Form.Control as="select" value={status} onChange={handleChangeStatus}>
              {statuses.map(elm => <option key={shortid()} value={elm}>{elm}</option>)}
          </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className={styles.col} xs='auto'>
            <Form.Label><strong>People:</strong></Form.Label>
          </Col>
          <Col className={styles.col} xs='auto'>
            <Form.Control className = {styles.input} value={peopleAmount} onChange={handleChangePeopleAmount}/>
          </Col>
          <Col className={styles.col} xs='auto'>
            <span className={styles.span}>/</span>
          </Col>
          <Col className={styles.col} xs='auto'>
            <Form.Control className = {styles.input} value={maxPeopleAmount} onChange={handleChangeMaxPeopleAmount}/>
          </Col>
        </Row>
        { status === "Busy" &&
        <Row className="my-2">
          <Col className={styles.col} xs='auto'>
            <Form.Label><strong>Bill:</strong></Form.Label>
          </Col>
          <Col className={styles.col} xs='auto'>
            <span className={styles.span}>$</span>
          </Col>
          <Col className={styles.col} xs='auto'>
            <Form.Control  className={styles.input} value={bill} onChange={e => setBill(e.target.value)}></Form.Control>
          </Col>
        </Row>
        }
        <Button type='submit' className="mt-4">Update</Button>
      </form> 
    )
};
export default TableForm;