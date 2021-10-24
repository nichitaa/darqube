import React from 'react';
import {Card, Pagination, StyledPageLayout} from '../components';
import {usePagination, useTypedSelector} from '../hooks';
import {INews} from '../types/news';
import {Col, Row} from 'antd';

const News = () => {
    const {displayedNews} = useTypedSelector(state => state.news);
    const {next, prev, startIdx, endIdx} = usePagination(displayedNews);

    return (
        <StyledPageLayout>
            <Row gutter={[18, 18]} className={'card-row'}>
                {
                    (displayedNews as INews[])
                        .filter(el => !el.isLatest)
                        .slice(startIdx, endIdx)
                        .map((el) => (
                            <Col key={el.id}>
                                <Card card={el}/>
                            </Col>
                        ))
                }
            </Row>
            <Pagination
                data={displayedNews}
                next={next}
                prev={prev}
                startIdx={startIdx}
                endIdx={endIdx}
            />
        </StyledPageLayout>
    );
};


export default News;