import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import Link from 'next/link'

const Navbar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href={'/dashboard'} as={`/dashboard`} passHref>
          <Button color="inherit" startIcon={<LinkIcon />} component="a">
            <Typography variant="h6">Kuip</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
