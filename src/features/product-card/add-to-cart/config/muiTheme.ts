import createTheme from '@mui/material/styles/createTheme';

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '21px',
          borderRadius: '8px',
          backgroundColor: '$green',
          boxShadow: 'none',
          position: 'relative',

          '&.Mui-disabled': {
            backgroundColor: '$green',
          },

          '&:hover': {
            backgroundColor: '$green',
            boxShadow: 'none',
          },

          '& svg': {
            position: 'absolute',
          },

          '@media (max-width: 500px)': {
            padding: '13.5px 15px',
            minWidth: '52px',
          },
          '@media (min-width: 1446px)': {
            padding: `${21 / 16}rem ${23 / 16}rem`,
            minWidth: `${65 / 16}rem`,
          },
        },
      },
    },
  },
});
