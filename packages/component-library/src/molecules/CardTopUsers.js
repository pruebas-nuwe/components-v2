import Link from 'next/link'
import { Fragment } from 'react'

// ** MUI Imports
import { Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import { Trophy } from 'mdi-material-ui'

// ** Custom Components
import CustomChip from 'src/shared/materio/@core/components/mui/chip'
import { Translations } from 'src/shared/utils/translation/Translations'

const StyledLink = styled(Box)(({ theme }) => ({
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
}))

const CardTopUsers = ({ users }) => {
  return (
    <Card>
      <CardHeader title={<Translations ns='events' text='top_ranking' />} action={<Trophy />} />
      <CardContent>
        {users.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: index !== users.length - 1 ? 6.5 : undefined
                }}
              >
                <Avatar src={item.image} sx={{ mr: 3, width: 38, height: 38 }} />
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
                    <StyledLink>
                      <Link href={`/profile/${item.username}`}>{item.username}</Link>
                    </StyledLink>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Trophy
                        sx={{
                          mr: 1.5,
                          fontSize: '1rem',
                          color: 'text.secondary',
                          verticalAlign: 'middle'
                        }}
                      />
                      <Typography variant='caption'>
                        <Translations ns='events' text='position' /> - {item.position}
                      </Typography>
                    </Box>
                  </Box>
                  <CustomChip
                    skin='light'
                    size='small'
                    label={`${item.rank} pts`}
                    color={'primary'}
                    sx={{ height: 20, mt: 0.4, fontSize: '0.75rem', fontWeight: 600 }}
                  />
                </Box>
              </Box>
              {item.position === 3 && (
                <Divider style={{ margin: '10px 0px' }} sx={{ mt: 0, mb: 1 }} />
              )}
            </Fragment>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardTopUsers
