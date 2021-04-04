import Grid from '@material-ui/core/Grid';

const InputRow = ({children}) => {
  return <Grid item sm={12} md={12} lg={6}>
    {children}
  </Grid>
}

export default InputRow;