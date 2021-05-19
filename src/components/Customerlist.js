import React, { useEffect, useState } from 'react';
import 'react-table/react-table.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export default function Customerlist() {
    const [customers, setCustomers] = useState ([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json()) 
    .then(data => {
        setCustomers(data.content);
      })
      .catch(err => console.log(err));
    }

   

    
    const columns = [
        { field: 'firstname', sortable: true, filter: true },
        { field: 'lastname', sortable: true, filter: true },
        { field: 'streetaddress', sortable: true, filter: true },
        { field: 'postcode', sortable: true, filter: true },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true },
       
            
    ]
   
    
return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '74%', margin: 'auto' }}>

    <AgGridReact
    rowData={customers}
    columnDefs={columns}
    />
    </div>
);
}