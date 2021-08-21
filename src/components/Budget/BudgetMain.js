import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Card, Paper, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import MainContainer from '../UI/MainContainer'
import BudgetContext from '../../store/budget-context.js'

import useStyles from './mainStyles';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const BudgetMain = () => {
    const classes = useStyles();
    const {budgetBalance, weekEndingBalance} = useContext(BudgetContext);
    return(
        <MainContainer>
            <Paper style={{display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', border: 'none'}}>
            <Card style={{backgroundColor: 'transparent', display:'flex'}} elevation={0} align="left">
                    <Link to='/Income' style={{textDecoration: 'none', margin:'0',padding:'0'}}>  
                        <Typography align='left' variant='subtitle1' style={{height:'65%', color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#d3d3d3', display:'flex',alignItems:'flex-end'}}>Income</Typography>
                    </Link>
                    <Link to='/Expense' style={{textDecoration: 'none', margin:'0',padding:'0'}}>  
                    <Typography align='left' variant='subtitle1' style={{height:'65%', color: 'white', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#d3d3d3', display:'flex',alignItems:'flex-end'}}>Expense</Typography>
                    </Link>
                    <Typography align='left' variant='h6' style={{color: 'black', borderTopRightRadius: '12px', padding: '.5rem', width: '10rem', backgroundColor: '#fada5f', display:'flex'}}>Budget</Typography>
            </Card>
            
            <Card>
                <CardContent>
                    <Typography align='center' variant='h5' style={{padding: '1rem'}}>₱ {budgetBalance}</Typography>
                    <Typography align='center' variant='subtitle2'>Total Budget</Typography>
                    <Divider style={{paddingBottom: '.5rem'}}/>
                    <BudgetForm/>
                    <CardContent className={classes.cardContent}>
                        <Grid item xs={12}>
                            <BudgetList />
                        </Grid>
                    </CardContent>
                </CardContent>
            </Card>
        </Paper>
        </MainContainer>
    )
}

export default BudgetMain;
