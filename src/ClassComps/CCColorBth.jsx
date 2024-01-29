import { Component } from "react";

export default class ColorBth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white'
        };
    }

    ColorButtonClick = (color) => {
        this.setState({ backgroundColor: color });
    };

    render() {
        const colors = ['Aquamarine', 'Coral', 'DarkCyan', 'DarkSalmon', 'DeepPink', 'FloralWhite', 'LightSkyBlue', 'LightPink'];

        return (
            <div style={{ backgroundColor: this.state.backgroundColor, padding: '10px', margin: '10px',borderRadius:'5px' }}>
                <h1>Colors-Q1</h1>
                {colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => this.ColorButtonClick(color)}
                        style={{ backgroundColor: color, margin: '5px'}}
                    >
                        {color}
                    </button>
                ))}
            </div>
        );
    }
}
