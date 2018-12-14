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
function createData (name, description, address, contactPhone, date, comment, status, asigneeId, administratorId, response) {
  id += 1;
  return { name, description, address,contactPhone, date, comment, status, asigneeId, administratorId, response };
}

const data = [
  createData('Clean fridge', 'do it like a pro', 'Taikos pr 14, Kaunas', '865552231', '2018-10-24', 'not gonna do it', 3, 1, 1, ''),
  createData('Wash car', 'clean the inside too', 'Pramones 13, Kaunas', '862221142', '2018-10-25', 'with pleasure', 3, 1, 1, ''),
  createData('Breed dog', 'nothing special', 'Rimvydo g. 5, Kaunas', '861122344', '2018-10-24', 'i hate dogs. Will not do it.', 3, 1, 1, '')
];

function TasksTable (props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Contact phone</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Comment</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Asignee</TableCell>
            <TableCell align="right">Administrator</TableCell>
            <TableCell align="right">Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell align="right">{n.description}</TableCell>
                <TableCell align="right">{n.address}</TableCell>
                <TableCell align="right">{n.contactPhone}</TableCell>
                <TableCell align="right">{n.date}</TableCell>
                <TableCell align="right">{n.comment}</TableCell>
                <TableCell align="right">{n.status}</TableCell>
                <TableCell align="right">{n.asigneeId}</TableCell>
                <TableCell align="right">{n.administratorId}</TableCell>
                <TableCell align="right">{n.response}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TasksTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TasksTable);
