import React, { Component } from 'react';
import BarChart from 'react-bar-chart';
import BarComponent from './BarComponent'

class HistogramComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.handleBar();
    }
    handleBar = () => {
        const { width, data } = this.props;
        let arr = width.split('');
        let a = arr.slice(0, arr.indexOf('p'));
        a = a.join('')
        const finalData = data.reverse();
        let barLength = a / 50;
        console.log(barLength);
        if (barLength > data.length) {
            barLength = data.length;
        }
        let array = [];
        for (let i = 0; i < barLength; i++) {
            array.push(finalData[i])
        }
        this.setState({ data: array })
    }
    render() {
        const { width } = this.props;
        const styles = {
            container: {
                width: width,
                height: '300px',
                padding: "20px 20px 10px 20px",
                /* --- font --- */
                color: "#444444",
                backgroundColor: "#ffffff",
                position: "relative",
                border: "1px solid #d5d5d5",
                borderRadius: '10px',
                overFlowX: "hidden"
            },
        }
        return (
            <div style={styles.container}>

                {this.state.data.map((element, i) => {

                    return (
                        <BarComponent
                            key={i}
                            id={element.id}
                            date={element.date}
                            duration={element.duration}
                            success={element.success}
                        />
                    )
                })}
            </div>
        )
    }
}

export default HistogramComponent;