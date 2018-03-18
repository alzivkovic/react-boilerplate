import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* components */
/* actions */
/* styles */
import './test.scss';

export class TestPage extends React.PureComponent {

    render() {
        return (
            <div className="test-page">
                Test Page
            </div>
        );
    }
}

TestPage.propTypes = {
    children: PropTypes.node
};

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
