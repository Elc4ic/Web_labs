import React, {useEffect, useState} from 'react';
import TableHead from './TableHead.jsx';
import TableBody from './TableBody.jsx';

const Table = ({ data, amountRows = 15}) => {
    const [currentPage, setCurrentPage] = useState(5);

    const pagesCount = Math.ceil(data.length / amountRows);

    useEffect(() => {setCurrentPage(pagesCount);}, [data]);

    return(
        <>
            <table className="data-table">
                <TableHead head={Object.keys(data[0])} />
                <TableBody data={data} amountRows={amountRows} numPage={currentPage} />
            </table>

            {pagesCount > 1 && (
                <div className="pagination">
                    {Array.from({ length: pagesCount }, (_, i) => i + 1).map(page => (
                        <span
                            key={page}
                            className={`page-number ${currentPage === page ? 'active' : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
}

export default Table;