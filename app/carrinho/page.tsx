import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Carrinho() {
    return(
        <div>
             <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 300,
        },
      }}
    >
      <Paper elevation={3}>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <strong>Comanda</strong>
            </div>
            <div className='flex flex-col justify-start items-start p-4'>
                <p>Pizza 4 Queijos</p>
                <p>Pizza 4 Queijos</p>
                <p>Coca-Cola</p>
            </div>

        </div>
      </Paper>
    </Box>
    </div>
    )
}