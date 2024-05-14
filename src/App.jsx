import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress'; 

const LogGetter = lazy(() => import("./pages/LogGetter"));
const LogSetter = lazy(() => import("./pages/LogSetter"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
        <Routes>
          <Route path="/" element={<LogGetter />} />
          <Route path="/setLog" element={<LogSetter />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  );
};

export default App;