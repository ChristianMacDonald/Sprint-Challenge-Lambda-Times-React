import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">TRENDING TOPICS:</span>
                {props.tabs.map((tab, index) => <Tab key={index} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />)}
            </div>
        </div>
      );
};

Tabs.propTypes = {
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.string,
    tab: PropTypes.string
};

export default Tabs;
