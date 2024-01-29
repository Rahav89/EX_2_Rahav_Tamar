import { Component } from "react";

export default class FormGrade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            grade: "",
            messGrade: ""
        }
    }

    funBulrInput = () => {
        this.setState({ firstName: "", lastName: "" })
    }

    funcInputOnFocus = (value) => {
        if (value === "First name") {
            this.setState({ firstName: "pls enter your first name" });
        }
        if (value === "Last name") {
            this.setState({ lastName: "pls enter your last name" });
        }
        if (value === "grade") {
            this.setState({ grade: "pls enter your grade" });
        }
    }

    funBlurGrade = (e) => {
        let gr = e.target.value;
        if (gr > 555) {
            this.setState({ messGrade: "You have been accepted for college!" });
        } else if (gr === "") {
            this.setState({ messGrade: "" });
        } else {
            this.setState({ messGrade: "You were not accepted, try next year:(" });
        }
    }

    render() {
        return (<>

            <h1>Form-Q2</h1>
            <div className="container">
                <form className="formgrade">
                    <div className="form-group">
                        <label>First name:</label>
                        <p style={{ color: "red", height: '15px' }} >{this.state.firstName}</p>
                        <input type="text" name="firstName"
                            onFocus={() => this.funcInputOnFocus("First name")}
                            onBlur={this.funBulrInput}></input>
                    </div>
                    <div className="form-group">
                        <label>Last name:</label>
                        <p style={{ color: "red", height: '15px' }}>{this.state.lastName}</p>
                        <input type="text" name="lastName"
                            onFocus={() => this.funcInputOnFocus("Last name")}
                            onBlur={this.funBulrInput}></input>
                    </div>
                    <div className="form-group">
                        <label>Grade:</label>
                        <p style={{ color: "red", height: '15px' }}>{this.state.grade}</p>
                        <input type="number" name="grade" min={0} max={800}
                            onFocus={() => this.funcInputOnFocus("grade")}
                            onBlur={this.funBlurGrade} ></input>
                        <p style={{ color: "green" }}>{this.state.messGrade}</p>
                    </div>
                </form>
            </div>
        </>
        )
    }




}