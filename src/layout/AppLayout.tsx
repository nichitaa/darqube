import React, {FC, useEffect} from 'react';
import {StyledAppLayout, StyledLatestNews} from '../components/StyledLayout';
import {fetchNewsAction} from '../store/news/actions';
import {useTypedSelector} from '../hooks';
import {useDispatch} from 'react-redux';
import {Card} from '../components';
import Navbar from './Navbar';
import {Spin} from 'antd';

const AppLayout: FC = ({children}) => {

    const dispatch = useDispatch();
    const {news, loading} = useTypedSelector(state => state.news);

    useEffect(() => {
        dispatch(fetchNewsAction());
    }, [dispatch]);

    return <>
        <Navbar/>
        <Spin spinning={loading}>
            <StyledAppLayout>
                <StyledLatestNews className={'latest-news'}>
                    {news && news[0] && <Card card={news[0]} latest={true}/>}
                </StyledLatestNews>
                {children}
            </StyledAppLayout>
        </Spin>
    </>;
};


export default AppLayout;