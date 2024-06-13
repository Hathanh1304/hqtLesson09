import './App.css';
import{React, useEffect, useState} from 'react'
import axios from 'axois';
import HqtStudentList from './Components/HqtStudentList';

function App() {
  const {hqtStudentList, setHqtStudentList}=useState([]);
  const hqtgetStudent = async () => {
    try {
      const response = await axios.get("https://666a591a7013419182cef08f.mockapi.io/api/hqtv1/hqtStudent");
      setHqtStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    hqtgetStudent();
  }, []);
  return (
    <div className="Container border mt-5 p-3">
      <h1 className="text-center my-3"> Xu ly chuc nang CRUD - Hook - API </h1>
      <hr/>
      <HqtStudentList renderHqtStudentList = {hqtStudentList}/>

    </div>
  );
}

export default App;
