import React, { useState } from 'react';
import { usePostLogMutation } from '../redux/logsApi';
import { Button, TextField, Box, Autocomplete } from '@mui/material';
import toast from 'react-hot-toast';
import TypographyTheme from '../components/TypographyTheme';
import { useNavigate } from 'react-router-dom';


const levelOptions = ['info', 'error', 'success'];
const sourceOptions = ['logs1.log', 'logs2.log', 'logs3.log'];

export default function LogSetter() {
  const [postLog, { isLoading }] = usePostLogMutation();
  const [logData, setLogData] = useState({
    level: null,
    log_string: '',
    timestamp: '',
    metadata: { source: null }
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData(prev => ({ ...prev, [name]: value }));
  };

  const handleAutocompleteChange = (name, newValue) => {
    if (name === 'source') {
      setLogData(prev => ({ ...prev, metadata: { ...prev.metadata, source: newValue } }));
    } else {
      setLogData(prev => ({ ...prev, [name]: newValue }));
    }
  };

  const handleSubmit = async () => {
    try {
      await postLog(logData);
      toast.success('Log added successfully!', {
        position: 'bottom-center'
      });
      
      setLogData({
        level: null,
        log_string: '',
        timestamp: '',
        metadata: { source: null }
      });
    } catch (error) {
      toast.error('Failed to add log', {
        position: 'bottom-center'
      });
    }
  };

    const handleSubmitChange = () =>{
        navigate('/');
    };

  return (
    <Box sx={{
      maxWidth: 500,
      margin: 'auto',
      padding: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      gap: 2 
    }}>
        
      <TypographyTheme text="Log Setter" />

      <Autocomplete
        value={logData.level}
        onChange={(event, newLevel) => handleAutocompleteChange('level', newLevel)}
        options={levelOptions}
        isOptionEqualToValue={(option, value) => option === value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label="Level" />}
      />
      <TextField fullWidth label="Log String" name="log_string" value={logData.log_string} onChange={handleChange} />
      <TextField fullWidth label="Timestamp" name="timestamp" type="datetime-local" value={logData.timestamp} onChange={handleChange} InputLabelProps={{ shrink: true }} />
      <Autocomplete
        value={logData.metadata.source}
        onChange={(event, newSource) => handleAutocompleteChange('source', newSource)}
        options={sourceOptions}
        isOptionEqualToValue={(option, value) => option === value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label="Source" />}
      />
      <Button variant="contained" onClick={handleSubmit} disabled={isLoading} sx={{
        width: '50%', 
        fontSize: '1.1rem', 
        padding: '10px 20px' 
      }}>
        Add Log
      </Button>
        <Button variant="contained" onClick={handleSubmitChange} sx={{
            width: '50%', 
            fontSize: '1.1rem', 
            padding: '10px 20px', 
            margin: '10px'
        }}>
            Log Getter
        </Button>
    </Box>
  );
}