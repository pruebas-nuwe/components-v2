import { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'

import LanguageDropdown from '../../../core/layouts/components/LanguageDropdown'
import ModeToggler from '../../../core/layouts/components/ModeToggler'
import { UserDropdown } from '../UserDropdown'

const AppBarContent = props => {
  const { hidden, settings, saveSettings, toggleNavVisibility, user, status, logout } = props

  const render = {
    loading: null,
    authorized: (
      <Fragment>
        <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          {hidden ? (
            <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
              <MenuIcon />
            </IconButton>
          ) : null}
          <ModeToggler settings={settings} saveSettings={saveSettings} />
          <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        </Box>
        <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
          <UserDropdown user={user} settings={settings} logout={logout} />
        </Box>
      </Fragment>
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {render[status]}
    </Box>
  )
}

export default AppBarContent
