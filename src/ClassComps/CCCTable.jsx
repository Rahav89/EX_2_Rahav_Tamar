import { Component } from "react";

export default class TableComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '100%',
        };
    }

    //בעת לחיצה אחת הטבלה משתנה ל-50%
    OneClick = () => {
        this.setState({ width: '50%' });
    };

    //בעת לחיצה כפולה הטבלה משתנה ל-100%
    DoubleClick = () => {
        this.setState({ width: '100%' });
    };

    render() {
        return (
            <>
                <h1>Table-Q3</h1>
                <table
                    style={{ width: this.state.width, border: '1px solid black' }}
                    onClick={this.OneClick}
                    onDoubleClick={this.DoubleClick}
                >
                    <tbody>
                        <tr >
                            <td >one</td>
                            <td >two</td>
                            <td >three</td>
                        </tr>
                        <tr >
                            <td >one</td>
                            <td >two</td>
                            <td >three</td>
                        </tr>
                    </tbody>
                </table >
            </>
        );
    }
}


