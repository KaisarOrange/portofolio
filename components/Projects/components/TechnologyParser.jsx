import { Box, Typography } from '@mui/material';
import React from 'react';

function TechnologyParser({ items }) {
  return (
    <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={2}>
      {items.map((e) => {
        return (
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
          >
            <img width={'50rem'} height={'50rem'} src={`${e.image}`}></img>
            <Typography fontSize={'0.9rem'}>{e.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default TechnologyParser;
