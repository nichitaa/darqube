import React, {FC} from 'react';
import {updateBookmarkAction} from '../../store/news/actions';
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import {useProgressiveImage} from '../../hooks';
import {useDispatch} from 'react-redux';
import {StyledCard} from './StyledCard';
import {Button, Col, Row} from 'antd';
import {INews} from '../../types/news';

type MainProps = {
    card: INews,
    latest?: boolean
}

const Card: FC<MainProps> = ({card, latest}) => {
    const dispatch = useDispatch();

    const imageLoaded = useProgressiveImage(card.image);

    const toggleIsBookmark = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        dispatch(updateBookmarkAction(card.id, !card.isBookmark));
    };

    return (
        <StyledCard img={imageLoaded} isLatest={latest}>
            <div className="card has-bg-img bg-img-nature">
                <div className={'card-content'} onClick={() => {
                    window.open(card.url, '_blank');
                }}>
                    <div>
                        <Row className={'top-row'} justify={'space-between'}>
                            <Col span={12}>
                                <Button className={'related-label'}>
                                    {card.related}
                                </Button>
                            </Col>
                            <Col>
                                {card.isLatest
                                && <span className={'latest-label'}>
                                    LATEST RESEARCH
                                </span>}
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className={'card-header'}>
                            {card.headline}
                        </Row>
                        <Row className={'card-summary'}>
                            {card.summary}
                        </Row>
                        <Row className={'card-footer'} justify={'space-between'} align={'middle'}>
                            <Col>
                                {card.datetime}
                            </Col>
                            <Col>
                                <Button
                                    className={'bookmark-btn'}
                                    shape={'circle'}
                                    onClick={toggleIsBookmark}
                                    icon={card.isBookmark ? <BsBookmarkFill size={20}/> : <BsBookmark size={20}/>}
                                />
                            </Col>
                        </Row>
                        <Row align={'middle'} justify={'center'} className={'bookmark-source'}>
                            {card.source}
                        </Row>
                    </div>
                </div>
            </div>
        </StyledCard>
    );
};


export default Card;