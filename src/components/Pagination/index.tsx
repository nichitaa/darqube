import React, {FC} from 'react';
import {Col, Row} from 'antd';
import {StyledPaginationButton} from '../StyledPaginationButton';
import {INews} from '../../types/news';

type MainProps = {
    data: INews[],
    startIdx: number,
    endIdx: number,
    prev: () => void,
    next: () => void
}

const Pagination: FC<MainProps> = ({
                                       data,
                                       startIdx,
                                       endIdx,
                                       prev,
                                       next
                                   }) => {
    return (
        <>
            {data.length >= 4
            && <Row
                className={'pagination-row'}
                align={'middle'}
                justify={'space-between'}
            >
                <Col className={'pagination-info'}>
                    {startIdx === 0 ? 1 : startIdx}-{endIdx > data.length ? data.length : endIdx} &nbsp;
                    <span style={{opacity: '.25'}}>out of {data.length}</span>
                </Col>
                <Row>
                    <Col>
                        <StyledPaginationButton onClick={prev}>
                            previous
                        </StyledPaginationButton>
                    </Col>
                    <Col>
                        <StyledPaginationButton onClick={next}>
                            next
                        </StyledPaginationButton>
                    </Col>
                </Row>
            </Row>}
        </>
    );
};

export default Pagination;