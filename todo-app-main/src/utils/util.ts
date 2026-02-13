export const pluralize = (text: string, count: number) => {
    return `${text}${count <= 1 ? '' : 's'}`;
};
