import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function Paginations({ page, handleChange, count }) {
  return (
    <div className='flex justify-center items-center'>
      <Pagination 
        count={count} 
        page={page} 
        onChange={handleChange} 
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
            border: '1px solid gray',
            '&.Mui-selected': {
              backgroundColor: 'blue',
              color: 'white',
              borderColor: 'blue',
            },
          },
          '& .MuiPaginationItem-ellipsis': {
            border: '0px solid gray !important',
          },
        }}
      />
    </div>
  );
}
