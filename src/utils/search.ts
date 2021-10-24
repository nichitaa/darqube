import {INews} from '../types/news';

const search = (arr: INews[], searchString: string): INews[] => {
    let temp: INews[] = []
    arr.forEach(el => {
        if (el.headline.toLowerCase().includes(searchString) || el.summary.toLowerCase().includes(searchString)) {
            temp.push(el);
        }
    });
    return temp;
};
export default search;