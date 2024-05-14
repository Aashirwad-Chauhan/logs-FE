import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  fontSize: '2rem', 
  textAlign: 'center', 
  width: '100%', 
}));

// Accepting text as a prop
export default function TypographyTheme({ text }) {
  return <Div>{text}</Div>;
}