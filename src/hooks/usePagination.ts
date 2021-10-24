import {useState} from 'react';
import {INews} from '../types/news';

type PaginationHook = (arr: INews[]) => { startIdx: number, endIdx: number, next: () => void, prev: () => void }

const usePagination: PaginationHook = (arr) => {
    const step = 6;
    const [startIdx, setStartIdx] = useState<number>(0);
    const [endIdx, setEndIdx] = useState<number>(step);

    const next = () => {
        if (arr.length <= endIdx) {
            return false;
        } else {
            setStartIdx(prev => prev += step);
            if(endIdx + step >= arr.length) {
                setEndIdx(prev => arr.length)
            } else {
                setEndIdx(prev => prev += step);
            }
        }
    };

    const prev = () => {
        if (startIdx - step >= 0) {
            setStartIdx(prev => prev -= step);
            if (endIdx - step < arr.length) setEndIdx(step)
            else setEndIdx(prev => prev -= step);
        } else {
            return false;
        }
    };

    return {startIdx, endIdx, next, prev}

};

export default usePagination;