import React from 'react';
import { useDispatch } from 'react-redux';
import IconLogo from '../../assets/img/icon-logo.svg';
import { push } from 'connected-react-router';

function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <header>
                <img class="logo" src={IconLogo} onClick={() => dispatch(push('/'))} alt="" />
                <div class="side-head">
                    <div class="search">
                        <input type="text" />
                        
                    </div>
                    <div class="option">
                        <p onClick={() => dispatch(push('/categories'))}>Category</p>
                        <p onClick={() => dispatch(push('/favourites'))}>Add to Wishlist</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
