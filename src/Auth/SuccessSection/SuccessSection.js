import React from 'react';
import '.././auth.css';

class SuccessSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (


            <div className="thank-you-bar">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="forgot-form-bar">
                            <form>

                                <div>
                            <span className="pass-changed">
                                <img src={require("../../images/svg/check.svg")}/></span>
                                    <label>Thank you.</label>
                                    <p>Your password successfully reset.</p>
                                    <button onClick={this.props.openLoginAfterSuccess}>ok</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}


export default SuccessSection
