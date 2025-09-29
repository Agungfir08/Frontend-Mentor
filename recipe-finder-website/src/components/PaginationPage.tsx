import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './ui/pagination';

interface PaginationPageProps {
    page: number;
    url: string;
    search?: string;
    totalPage: number;
}

function PaginationPage({ page, url, totalPage, search }: PaginationPageProps) {
    const buildHref = (pageNumber: number) => {
        const params = new URLSearchParams();
        params.set('page', String(pageNumber));
        if (search && search.trim() !== '') {
            params.set('search', search);
        }
        return `${url}?${params.toString()}`;
    };
    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationPrevious href={buildHref(page - 1)} />
                        </PaginationItem>
                        {page - 2 > 0 && (
                            <PaginationItem>
                                <PaginationLink
                                    isActive={false}
                                    href={buildHref(1)}>
                                    {1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        {page - 2 > 1 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationLink
                                isActive={false}
                                href={buildHref(page - 1)}>
                                {page - 1}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}
                <PaginationItem>
                    <PaginationLink isActive={true} href={buildHref(page)}>
                        {page}
                    </PaginationLink>
                </PaginationItem>
                {page < totalPage && (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                isActive={false}
                                href={buildHref(page + 1)}>
                                {page + 1}
                            </PaginationLink>
                        </PaginationItem>

                        {page < totalPage - 2 && (
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}

                        {page + 2 <= totalPage && (
                            <PaginationItem>
                                <PaginationLink
                                    isActive={false}
                                    href={buildHref(totalPage)}>
                                    {totalPage}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationNext href={buildHref(page + 1)} />
                        </PaginationItem>
                    </>
                )}
            </PaginationContent>
        </Pagination>
    );
}

export default PaginationPage;
