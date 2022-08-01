// selectors
export const getAllTables = ({tables}) => tables;
export const getTableById = ({tables}, tableId) => tables.find(table => table.id === tableId);
// action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({
  type: UPDATE_TABLES,
  payload
});


export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  }
};

export const fetchEditTable = (table, id) => {
 return(dispatch) => {
    const options = {
      method: 'PATCH',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        status: table.statusData,
        peopleAmount: table.peopleAmountData,
        maxPeopleAmount: table.maxPeopleAmountData,
        bill: table.billData
      })
    };
    fetch(`http://localhost:3131/tables/${id}`, options)
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));;
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;