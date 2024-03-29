import createTheme from '@mui/material/styles/createTheme';

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '21px 23px',
          borderRadius: '15px',
          backgroundColor: '#a0a0a0',
          boxShadow: 'none',
          position: 'relative',

          '&:hover': {
            backgroundColor: '#a0a0a0',
            boxShadow: 'none',
          },

          '& svg': {
            position: 'absolute',
          },

          '@media (max-width: 500px)': {
            padding: '12px 15px',
            borderRadius: '8px',
            minWidth: '40px',
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
