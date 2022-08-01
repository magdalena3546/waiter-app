import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";
import TableDescription from "../views/TableDescription.";
const TableRender = () => {
  const tables = useSelector(getAllTables);
  return(
    <>
    {tables.map(table => <TableDescription key={table.id} {...table} />)}
    </>
  );
};
export default TableRender;