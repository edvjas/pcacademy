import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};

let id = 0;
function createData (firstName, lastName, loginName, phoneNumber, role) {
  id += 1;
  return {firstName, lastName, loginName, phoneNumber, role};
}

const data = [
  createData('Edvardas', 'topikas', 'edvardas.tropikas@mail.com', '864444444', 1),
  createData('Tomas', 'topikas', 't.tropikas@mail.com', '864422331', 1),
  createData('Jonas', 'topikas', 'j.tropikas@mail.com', '861234567', 1),
  createData('Julius', 'topikas', 'juliuks.tropikas@mail.com', '8615632481', 1),
  createData('Timofejus', 'moz', 't.moz@mail.com', '864447777', 2)
];

function UsersTable (props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Login</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.firstName}
                </TableCell>
                <TableCell align="right">{n.lastName}</TableCell>
                <TableCell align="right">{n.loginName}</TableCell>
                <TableCell align="right">{n.phoneNumber}</TableCell>
                <TableCell align="right">{n.role}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

UsersTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsersTable);
