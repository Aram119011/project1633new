import React from 'react';

import './authdelate.css'
import {AuthAPI} from "../../../API/api";


class AuthDelate extends React.Component {


    deleteAccountAuth = (e) => {
        e.preventDefault();
        AuthAPI.accoundelatetAuth()
            .then(res=>{
                console.log(res);
                // if(res.status === 200){
                //     this.props.history.push('http://localhost:3000')
                //
                // }

            })

    };

    render() {
        return (
            <div id="authdelete">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            {/*<button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                            <button onClick={() => this.props.closeModalAuth()} type="button"  className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                            {/*<button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                        </div>
                        <div className="modal-body">
                            <div className="btn-bar">
                                <button  onClick={() => this.props.closeModalAuth()} className="no-btn">No</button>

                                <button className="yes-btn" onClick = {this.deleteAccountAuth }>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthDelate;
