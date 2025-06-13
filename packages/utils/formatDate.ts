export function formatDate(date: Date): string {
    return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}

export function formatDateTime(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    };

    const formattedDate = new Date(date).toLocaleString("ko-KR", options);
    return formattedDate;
}
