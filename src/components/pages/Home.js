import TableRender from "../features/TableRender";
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const Home = ({loading}) => {
  return(
  <>
    <h1>All tables</h1>
    {loading && 
      <Spinner animation="border" variant="primary" />
    }
    <TableRender />
  </>
  )
};

Home.propTypes = {
  loading: PropTypes.bool,
};

export default Home;