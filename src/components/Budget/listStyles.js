import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  avatarBudget: {
    backgroundColor: 'transparent',
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
  margin: {
      margin: theme.spacing(1),
    },
  withoutLabel: {
      marginTop: theme.spacing(3),
    },
  textField: {
      width: '25ch',
    },
}));