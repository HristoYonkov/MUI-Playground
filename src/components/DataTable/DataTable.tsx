import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import TableToolbar from './TableToolbar';

interface Data {
    id: number;
    name: string;
    email: string;
    role: string;
    createDate: string;
}

function createData(id: number, name: string, email: string, role: string, createDate: string): Data {
    return {
        id,
        name,
        email,
        role,
        createDate,
    };
}

const rows = [
    createData(1, 'Ico', 'ico@abv.bg', 'admin', '2024-05-24'),
    createData(2, 'Petkan', 'petkan@abv.bg', 'courier', '2024-05-24'),
    createData(3, 'Milko', 'dragan@abv.bg', 'courier', '2024-05-24'),
    createData(4, 'Dragan', 'dragan@abv.bg', 'courier', '2024-05-24'),
    createData(5, 'Ivo', 'ivo@abv.bg', 'admin', '2024-05-24'),
    createData(6, 'Pavel', 'ipavel@abv.bg', 'courier', '2024-05-24'),
    createData(7, 'Metil', 'metil@abv.bg', 'courier', '2024-05-24'),
    createData(8, 'Petkan', 'petkan@abv.bg', 'admin', '2024-05-24'),
    createData(9, 'Milko', 'dragan@abv.bg', 'courier', '2024-05-24'),
    createData(10, 'Dragan', 'dragan@abv.bg', 'courier', '2024-05-24'),
    createData(11, 'Ivo', 'ivo@abv.bg', 'courier', '2024-05-24'),
    createData(12, 'Pavel', 'ipavel@abv.bg', 'courier', '2024-05-24'),
    createData(13, 'Metil', 'metil@abv.bg', 'admin', '2024-05-24'),
    createData(14, 'Petkan', 'petkan@abv.bg', 'courier', '2024-05-24'),
    createData(15, 'Milko', 'dragan@abv.bg', 'courier', '2024-05-24'),
    createData(16, 'Dragan', 'dragan@abv.bg', 'courier', '2024-05-24'),
    createData(17, 'Ivo', 'ivo@abv.bg', 'courier', '2024-05-24'),
    createData(18, 'Pavel', 'ipavel@abv.bg', 'courier', '2024-05-24'),
    createData(19, 'Metil', 'metil@abv.bg', 'courier', '2024-05-24'),
    createData(20, 'Metil', 'metil@abv.bg', 'courier', '2024-05-24'),
    createData(21, 'Ico', 'ico@abv.bg', 'admin', '2024-05-24'),
    createData(22, 'Ico', 'ico@abv.bg', 'courier', '2024-05-24'),
    createData(23, 'Ico', 'ico@abv.bg', 'admin', '2024-05-24'),
    createData(24, 'Ico', 'ico@abv.bg', 'courier', '2024-05-24'),
    createData(25, 'Ico', 'ico@abv.bg', 'courier', '2024-05-24'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Име',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Имейл',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Роля',
    },
    {
        id: 'createDate',
        numeric: false,
        disablePadding: false,
        label: 'Създаден на',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
        // usually was (headcell.id)
    };

    return (
        <TableHead>
            <TableRow sx={{ backgroundColor: '#F6F6F6' }}>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <Typography fontWeight={600}>{headCell.label}</Typography>
                    </TableCell>
                ))}
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
    );
}

const DataTable: React.FC = () => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ width: '98%', mb: 2 }}>
                <TableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role='checkbox'
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        <TableCell component='th' id={labelId} scope='row' padding='normal'>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align='left'>{row.email}</TableCell>
                                        <TableCell align='left'>{row.role}</TableCell>
                                        <TableCell align='left'>{row.createDate}</TableCell>
                                        <TableCell align='left' sx={{ cursor: 'pointer' }}>
                                            <MoreHorizIcon />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

export default DataTable;
