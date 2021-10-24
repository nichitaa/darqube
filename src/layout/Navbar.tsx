import React, {useEffect, useState} from 'react';
import {onNewsResetSearchAction, onNewsSearchAction} from '../store/news/actions';
import {StyledLink, StyledNav} from '../components/StyledNav';
import {SearchOutlined} from '@ant-design/icons';
import {useTypedSelector} from '../hooks';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Col, Input, Row} from 'antd';

const Navbar = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('');
    const {pathname} = useTypedSelector(state => state.router.location as any);

    // search logic depending on which page the user is on
    useEffect(() => {
        if (search.trim() === '') {
            dispatch(onNewsResetSearchAction());
        } else if (search.trim().length >= 3) {
            dispatch(onNewsSearchAction(search));
        }
    }, [pathname, dispatch, search]);

    return (
        <StyledNav hasSearch={search.trim().length > 0}>
            <Row justify={'space-between'}>
                <Col xs={8} sm={12} md={12} lg={12} xl={12}>
                    <Row>
                        <Col>
                            <Link to={'/'}>
                                <StyledLink isSelected={pathname === '/'}>
                                    News
                                </StyledLink>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={'/bookmarks'}>
                                <StyledLink isSelected={pathname === '/bookmarks'}>
                                    Bookmarks
                                </StyledLink>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Input
                        className={'search-input'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        prefix={<SearchOutlined style={{color: 'white'}}/>} placeholder={'Search news and bookmarks'}/>
                </Col>
            </Row>
        </StyledNav>
    );
};


export default Navbar;