import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import Header from "./components/views/Header";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/pages/NotFound";
import Table from "./components/pages/Table"
import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStatuses } from "./redux/statusesRedux";
import { useSelector } from 'react-redux'
import Footer from "./components/views/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() =>  dispatch(fetchStatuses()), [dispatch]);
  const test = useSelector(state => state.tables);
  console.log(test);


  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path = "/tables/:tableId" element = {<Table />} /> 
          <Route path = "*" element = {<NotFound />} /> 
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
