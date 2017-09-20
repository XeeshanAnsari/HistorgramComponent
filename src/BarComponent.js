import React, { Component } from 'react';

class BarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }
    handleMouseOverColor = () => {
        this.setState({ hover: true })
    }
    handleMouseDownColor = () => {
        this.setState({ hover: false })
    }
    render() {
        const { id, date, duration, success } = this.props;
        console.log('props', this.props)
        const styles = {

            barStyle: {
                display: 'inline-block',
                width: 48,
                marginLeft: 2,
                height: duration / 20,
                backgroundColor: (success === 0) ? (this.state.hover === false) ? 'green' : "#86ea55" : "#c6001a",
            }
        }

        return (
            <span>
                <span style={styles.barStyle} key={id} onMouseOver={this.handleMouseOverColor} onMouseOut={this.handleMouseDownColor}>
                </span>
            </span>
        )
    }
}

export default BarComponent;