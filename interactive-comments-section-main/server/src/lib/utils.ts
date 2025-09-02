export function daysAgo(day: number): Date {
    const date = new Date();
    return new Date(date.getTime() - day * 24 * 60 * 60 * 1000);
}

export function weeksAgo(week: number): Date {
    return daysAgo(week * 7);
}

export function monthsAgo(month: number): Date {
    return daysAgo(month * 30);
}
