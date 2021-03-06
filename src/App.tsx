import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Table from './Componets/Table';
import { getTableData } from './Store/actions';
import { State } from './Store/reducer';



const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const tableData = useSelector((state: State) => state.data);
   
  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch])

    return (
      <div className='page-container'>
        <Table data={tableData} rowCount={10} step={10}/>
      </div>
    )
}

export default App;
