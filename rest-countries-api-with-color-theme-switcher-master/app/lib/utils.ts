export const generatePagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};

export const getNativeName = (countryName: CountryName) => {
    const nativeNames = Object.values(countryName.nativeName);
    return nativeNames.length > 0 ? nativeNames[0].common : countryName.common;
};

export const getCurrency = (currency: Currency) => {
    const currencies = Object.values(currency);
    return currencies.length > 0 ? currencies[0].name : '';
};
