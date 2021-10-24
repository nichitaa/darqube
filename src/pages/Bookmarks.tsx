import React, {useEffect, useState} from 'react';
import {Card, Pagination, StyledPageLayout} from '../components';
import {usePagination, useTypedSelector} from '../hooks';
import {INews} from '../types/news';
import {Col, Row} from 'antd';

const Bookmarks = () => {

    const [bookmarks, setBookmarks] = useState<INews[]>([]);
    const {displayedNews} = useTypedSelector(state => state.news);
    const {startIdx, endIdx, prev, next} = usePagination(bookmarks);

    useEffect(() => {
        // @ts-ignore
        const temp = displayedNews.filter(el => el.isBookmark);
        setBookmarks(temp);
    }, [displayedNews]);

    return (
        <StyledPageLayout>
            <Row className={'card-row'} gutter={[18, 18]}>
                {
                    bookmarks
                        .filter(el => el.isBookmark)
                        .slice(startIdx, endIdx)
                        .map((el) => (
                            <Col key={el.id}>
                                <Card card={el}/>
                            </Col>
                        ))
                }
            </Row>
            <Pagination
                data={bookmarks}
                next={next}
                prev={prev}
                startIdx={startIdx}
                endIdx={endIdx}
            />
        </StyledPageLayout>
    );
};

export default Bookmarks;