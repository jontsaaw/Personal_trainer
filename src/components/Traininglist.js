import React, { useEffect, useState } from 'react';
import moment from "moment";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export default function Traininglist() {
    const [trainings, setTrainings] = useState ([]);

    useEffect(() => fetchTrainings(), []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
          .then(response => response.json())
          .then(data => {
            setTrainings(data);
          })
          .catch(err => console.log(err));
      }

    const date = (params) => {
        return moment(params.value).format('MMMM Do, h:mm a');
      }

     
      const fullName = (params) => {
        return params.data.customer.firstname + ' ' + params.data.customer.lastname;
      }
    
    const columns = [
        { field: 'date', sortable: true, filter: true, valueFormatter: date },
        { field: 'duration', sortable: true, filter: true },
        { field: 'activity', sortable: true, filter: true },
        { field: 'customer', sortable: true, filter: true, valueGetter: fullName},
     
       
            
    ];
   
    
return (
    <div className="ag-theme-alpine" style={{ height: 550, width: 800, margin: 'auto' }}>

    <AgGridReact
    rowData={trainings}
    columnDefs={columns}
    />
    </div>
);
}