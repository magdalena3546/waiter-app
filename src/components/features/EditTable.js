import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { fetchEditTable, getTableById } from "../../redux/tablesRedux";
import TableForm from "./TableForm/TableForm";


const EditTable = () => {
  const dispatch = useDispatch();
  const { tableId } = useParams();
  const tableData = useSelector(state => getTableById(state, tableId));

  let navigate = useNavigate();

 const handleSubmit = table => {
  dispatch(fetchEditTable({...table}));
  navigate('/');
 }

 if (!tableData) return <Navigate to="/" />
  return(
    <TableForm action={handleSubmit} id={tableData.id} status={tableData.status} people={tableData.peopleAmount} maxPeople={tableData.maxPeopleAmount} bill={tableData.bill} />
  )
};
export default EditTable;