import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'


const rows: number[] = [
    0,
    1,
    2,
    3,
    4,
    5
]

export const Chart: React.FC = () => {
    return (
        <div className="m-2">
            <Table className="table table-striped table-bordered" stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <TableCell>Header Cell 1</TableCell>
                        <TableCell>Header Cell 2</TableCell>
                        <TableCell>Header Cell 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((x: number) => {
                        return (
                            <TableRow>
                                <TableCell>{x}</TableCell>
                                <TableCell>{x}</TableCell>
                                <TableCell>{x}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            
      </div>
    )
} 