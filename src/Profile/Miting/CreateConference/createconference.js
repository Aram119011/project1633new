import React from 'react';
import './createconference.css'


class CreatConferance extends React.Component {
    render() {
        return (
            <div id="createConference">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            {/*<button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                            <button   type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                            {/*<button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                        </div>
                        <div className="modal-body">

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreatConferance
