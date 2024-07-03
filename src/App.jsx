import React from 'react';
import { APIProvider } from './components/APIContext';
import NavBar from './components/NavBar';
import Table from './components/Table';
import ToggleButtons from './components/ToggleButton';

export default function App() {
  return (
    <APIProvider>
      <>
        {/* application navbar */}
        <NavBar />
        <div className="app-padding mt-5">
          <ToggleButtons /> 
          {/* list */}
          <div className="text-xl font-bold p-3">Department List</div>
          <div className="mt-3">
            <Table />
          </div>
        </div>
      </>
    </APIProvider>
  );
}
