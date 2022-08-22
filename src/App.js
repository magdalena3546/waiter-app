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
import Footer from "./components/views/Footer";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  useEffect(() => dispatch(fetchTables(setLoading)), [dispatch]);
  useEffect(() =>  dispatch(fetchStatuses()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element= {<Home loading = {loading} />}/>
          <Route path = "/tables/:tableId" element = {<Table />} /> 
          <Route path = "*" element = {<NotFound />} /> 
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
