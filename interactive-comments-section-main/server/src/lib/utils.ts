export function daysAgo(days: number): Date {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d;
}

export function weeksAgo(weeks: number): Date {
    return daysAgo(weeks * 7);
}

export function monthsAgo(months: number): Date {
    const d = new Date();
    d.setMonth(d.getMonth() - months);
    return d;
}
