import {INews} from '../types/news';

const updateBookmark = (arr: INews[], id: number, bool: boolean): INews[] => {
    return arr.map((el: any) => {
        if (el.id === id) return {...el, isBookmark: bool};
        else return el;
    });
};
export default updateBookmark;