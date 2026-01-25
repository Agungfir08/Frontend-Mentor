import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './UI/table';
import { useState } from 'react';
import { dateFormat, formatTimer } from '@/lib/utils';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from './UI/pagination';

function HistoryTable({ history }: Pick<TypingStore, 'history'>) {
    const HeadTable = ['Date', 'Mode', 'Time', 'WPM', 'Acc'];
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 5;

    const TOTAL_PAGE = Math.ceil(history.length / ITEMS_PER_PAGE);
    const START_INDEX = (currentPage - 1) * ITEMS_PER_PAGE;
    const CURRENT_HISTORY = history.slice(
        START_INDEX,
        START_INDEX + ITEMS_PER_PAGE,
    );

    const handlePreviousPage = () => {
        if (currentPage <= 1) return;
        setCurrentPage((page) => page - 1);
    };

    const handleNextPage = () => {
        if (currentPage >= TOTAL_PAGE) return;
        setCurrentPage((page) => page + 1);
    };
    return (
        <>
            <Table>
                <TableHeader className="bg-neutral-400/20">
                    <TableRow>
                        {HeadTable.map((head, idx) => (
                            <TableHead
                                key={idx}
                                className="text-preset-four first:w-[30%] text-center text-neutral-0">
                                {head}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {CURRENT_HISTORY.map((data, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{dateFormat(data.date)}</TableCell>
                            <TableCell className="text-center capitalize">
                                {data.mode}
                            </TableCell>
                            <TableCell className="text-center">
                                {formatTimer(data.timeLimit ?? 0)}
                            </TableCell>
                            <TableCell className="text-center">
                                {data.wpm}
                            </TableCell>
                            <TableCell className="text-center">
                                {`${data.accuracy}%`}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent className="space-x-2.5">
                    <PaginationItem>
                        <PaginationPrevious onClick={handlePreviousPage} />
                    </PaginationItem>
                    <span className="text-preset-six text-neutral-400">{`${currentPage} of ${TOTAL_PAGE}`}</span>
                    <PaginationItem>
                        <PaginationNext onClick={handleNextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}

export default HistoryTable;
