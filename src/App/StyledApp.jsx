import {styled} from '@mui/material/styles'
import appColor from '../setting/appColor';


export const StyledApp = styled('div')(
  ({theme}) => ({
    
  })
);

export const AppHeader = styled('header')(
  ({theme}) => ({

  })
)

export const AppMain = styled('main')(
  ({theme}) => ({
    minHeight: '100vh',
    backgroundColor: appColor.backgroundSecondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
    // textAlign: 'center'
  })
)

export const AppFooter = styled('footer')(
  ({theme}) => ({

  })
)
