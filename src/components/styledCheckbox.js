import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox icon={<CircleUnchecked />}
checkedIcon={<CircleCheckedFilled />}
color="default" {...props} />);

export default function StyledCheckbox(props) {
  const [state, setState] = React.useState({
    checkedG: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
    return (
      <FormControlLabel
        control={ <GreenCheckbox  checked={state.checkedG} onChange={handleChange} name="checkedG" />}
     
      label={props.label}
      />
    );
}