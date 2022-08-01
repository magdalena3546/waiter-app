import PropTypes from 'prop-types';
import { Button, Form, Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllStatuses } from '../../../redux/statusesRedux';
import shortid from 'shortid';
import { useNavigate, useParams } from "react-router-dom";
import { getTableById } from '../../../redux/tablesRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEditTable } from '../../../redux/tablesRedux';
import styles from './TableForm.module.scss'

const TableForm = () => {
  const statuses = useSelector(getAllStatuses);
  const {id} = useParams();
  const table = useSelector(state => getTableById(state, id));
  const [ statusData, setStatusData ] = useState(table.status);
  const [ peopleAmountData, setPeopleAmountData] = useState(table.peopleAmount);
  const [ maxPeopleAmountData, setMaxPeopleAmountData ] = useState(table.maxPeopleAmount);
  const [ billData, setBillData] = useState(table.bill);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangeStatus = e => {
    setStatusData(e.target.value);
    if (e.target.value === "Cleaning" || e.target.value === "Free"){
      setPeopleAmountData("0");
    }
  };
  const handleChangeMaxPeopleAmount = e => {
    setMaxPeopleAmountData(e.target.value);
    if (e.target.value < peopleAmountData){
      setPeopleAmountData(e.target.value);
    }
  };

  const handleSubmit = () => {
    dispatch(fetchEditTable({statusData, peopleAmountData, maxPeopleAmountData, billData}, id));
    navigate('/');
  };
  
  return(
    <form onSubmit={handleSubmit}>
      <h1>{`Table ${table.id}`}</h1>
      <Row>
      <Col xs='auto'>
        <Form.Label><strong>Status:</strong></Form.Label>
      </Col>
      <Col xs='auto'>
        <Form.Control as="select" value={statusData} onChange={handleChangeStatus}>
            {statuses.map(elm => <option key={shortid()} value={elm}>{elm}</option>)}
        </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col xs='auto'>
          <Form.Label><strong>People:</strong></Form.Label>
        </Col>
        <Col xs='auto'>
          <Form.Control value={peopleAmountData} onChange={e => setPeopleAmountData(e.target.value)}/>
        </Col>
        <Col xs='auto'>
          <span>/</span>
        </Col>
        <Col xs='auto'>
          <Form.Control className = {styles.input} value={maxPeopleAmountData} onChange={handleChangeMaxPeopleAmount}/>
        </Col>
      </Row>
      { statusData === "Busy" &&
      <Row>
        <Col xs='auto'>
          <Form.Label><strong>Bill:</strong></Form.Label>
        </Col>
        <Col xs='auto'>
          <span className="m-0">$</span>
        </Col>
        <Col xs='auto'>
          <Form.Control value={billData} onChange={e => setBillData(e.target.value)}></Form.Control>
        </Col>
      </Row>
      }
      <Button type='submit' className="mt-4">Update</Button>
    </form> 
 
  )
};
export default TableForm;