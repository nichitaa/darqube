export interface INews {
    category: string,
    datetime: string, // converted from UNIX timestamp to needed format
    headline: string,
    id: number,
    image: string,
    related: string,
    source: string,
    summary: string,
    url: string,
    isLatest: boolean,
    isBookmark: boolean
}