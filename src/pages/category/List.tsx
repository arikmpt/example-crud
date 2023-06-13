import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Container, Typography, Button, TableFooter, TablePagination } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const List = () => {
    const navigate = useNavigate();
    const rows = [
        {
            id: 1,
            name: 'Example Category 1',
            is_active: true
        },
        {
            id: 2,
            name: 'Example Category 2',
            is_active: true
        },
        {
            id: 3,
            name: 'Example Category 3',
            is_active: true
        }
    ]

    const handleEdit = (id: number) => () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div className='content'>
            <Container maxWidth="md">
                <div className='category-list'>
                    <Typography variant="h4" component="h4" align={'center'}>
                        List Of Category
                    </Typography>
                    <Link to={'/add'}>Add New Category</Link>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell align="center">{row.name}</TableCell>
                                            <TableCell align="center">{row.is_active ? 'Active' : 'Deactive'}</TableCell>
                                            <TableCell align="center">
                                                <div className="action-group">
                                                    <Button size="small" variant="contained" onClick={handleEdit(row.id)}>Edit</Button>
                                                    <Button size="small" variant="outlined" color="error">Hapus</Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={4}
                                        count={rows.length}
                                        rowsPerPage={10}
                                        page={1}
                                        SelectProps={{
                                            inputProps: {
                                                'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
                                        onPageChange={() => console.log('handle change')}
                                        onRowsPerPageChange={() => console.log('handle row change')}
                                    />
                                </TableRow>
                                </TableFooter>
                        </Table>
                    </TableContainer>
                </div>
            </Container>
        </div>
    )
}

export default List