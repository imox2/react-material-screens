import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "1rem"
  }
}))
const InputRow = ({children}) => {
  const classes = useStyles();
  return <Grid className={classes.root} item xs={12}>
    {children}
  </Grid>
}

export default InputRow;