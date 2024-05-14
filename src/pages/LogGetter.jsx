import React, { useState } from 'react';
import { useGetLogsQuery } from '../redux/logsApi';
import LogTable from '../components/LogTable';
import { CircularProgress, Box, TextField, Grid, Autocomplete, Button } from '@mui/material';
import TypographyTheme from '../components/TypographyTheme';
import { useNavigate } from 'react-router-dom';

const levelOptions = ['info', 'error', 'success'];
const sourceOptions = ['logs1.log', 'logs2.log', 'logs3.log'];

const LogGetter = () => {
    const [searchParams, setSearchParams] = useState({});
    const { data: logs, error, isLoading } = useGetLogsQuery(searchParams);
    const navigate = useNavigate();
  
    const handleInputChange = (e, value, reason) => {
      if (reason === 'selectOption' || reason === 'clear') {
        setSearchParams(prev => ({ ...prev, [e.target.name]: value }));
      }
    };
  
    const safeLogs = Array.isArray(logs?.data) ? logs.data : [];

    const handleSubmit = () =>{
        navigate('/setLog');
    };
  
    return (
      <div className="App">
        <Button variant="contained" onClick={handleSubmit} sx={{
            width: '12%', 
            fontSize: '1.1rem', 
            padding: '10px 20px', 
            margin: '10px'
        }}>
            Log Setter
        </Button>
        <TypographyTheme text="Log Getter" />
        <Box sx={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                <Autocomplete
                    options={levelOptions}
                    renderInput={(params) => <TextField {...params} label="Log Level" />}
                    onChange={(event, newValue) => {
                        setSearchParams(prev => {
                        const newParams = { ...prev };
                        if (newValue) {
                            newParams.level = newValue;
                        } else {
                            delete newParams.level;
                        }
                        return newParams;
                        });
                    }}
                    isOptionEqualToValue={(option, value) => option === value}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="log_string" label="Log String" variant="outlined" onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                <Autocomplete
                    options={sourceOptions}
                    renderInput={(params) => <TextField {...params} label="Source" />}
                    onChange={(event, newValue) => {
                        setSearchParams(prev => {
                        const newParams = { ...prev };
                        if (newValue) {
                            newParams.source = newValue;
                        } else {
                            delete newParams.source;
                        }
                        return newParams;
                        });
                    }}
                    isOptionEqualToValue={(option, value) => option === value}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="timestamp" label="Specific Timestamp" type="datetime-local" variant="outlined" InputLabelProps={{ shrink: true }} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="startDate" label="Start Date" type="datetime-local" variant="outlined" InputLabelProps={{ shrink: true }} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField fullWidth name="endDate" label="End Date" type="datetime-local" variant="outlined" InputLabelProps={{ shrink: true }} onChange={handleInputChange} />
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ width: '100%', overflow: 'hidden', marginTop: '20px' }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <LogTable logs={safeLogs} />
          )}
        </Box>
      </div>
    );
  };
  
  export default LogGetter;