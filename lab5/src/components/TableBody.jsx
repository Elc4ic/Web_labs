import TableRow from './TableRow.jsx';

const TableBody = ({ data, amountRows, numPage }) => {
    const begRange = (numPage - 1) * amountRows;
    const currentData = data.slice(begRange, begRange + Number(amountRows));

    return (
        <tbody>
        {currentData.map((item, index) => (
            <tr key={index}><TableRow row={Object.values(item)} isHead="0" /></tr>
        ))}
        </tbody>
    );
}

export default TableBody;