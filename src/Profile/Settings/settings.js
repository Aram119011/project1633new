import React from 'react';
import './settings.css';


class Setings extends React.Component {
    render() {
        return (
            <div id="settings">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button  onClick={() => this.props.closeModalSetings()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                            {/*<button  onClick={() => this.props.closeModalSetings()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                        </div>
                        <div className="modal-body">
                            <div className="profile-changes-banner">
                                <div className="content-name">
                                    <h2>Settings</h2>
                                </div>
                                <form action="#" method="post">
                                    <div className="settings-banner">
                                        <div className="col audio-content">
                                            <div className="content-name">
                                                <h3>Audio</h3>
                                            </div>
                                            <div className="test-banner">
                                                <div>
                                                    <button className="test-btn">Test Speaker</button>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="system-label">
                                                            <select className="form-control">
                                                                <option>System Default Speaker</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                    <div className="audio-volume-bar">
                                                        <label htmlFor="audio-volume-1">Volume</label>
                                                        <div>
                                                            <span><i className="fa fa-volume-down"
                                                                     aria-hidden="true"></i></span>
                                                            <input type="range" min="1" max="100" step="1" value="70"
                                                                   id="audio-volume-1" />
                                                            <span><i className="fa fa-volume-up"
                                                                     aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="test-banner">
                                                <div>
                                                    <button className="test-btn">Test Microphone</button>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="system-label">
                                                            <select className="form-control">
                                                                <option>System Default Microphone</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                    <div className="audio-volume-bar">
                                                        <label htmlFor="audio-volume-2">Volume</label>
                                                        <div>
                                                            <span><i className="fa fa-volume-down"
                                                                     aria-hidden="true"></i></span>
                                                            <input type="range" min="1" max="100" step="1" value="70"
                                                                   id="audio-volume-2" />
                                                            <span><i className="fa fa-volume-up"
                                                                     aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col video-content">
                                            <div className="content-name">
                                                <h3>Video</h3>
                                            </div>
                                            <div className="video-bar">

                                            </div>
                                            <div className="justify-content-end d-flex">
                                                <label className="system-label">
                                                    <select className="form-control">
                                                        <option>System Default Camera</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="save-changes-bar">
                                                <input type="submit" className="save-changes" id="save-settings-changes"
                                                       value="Save" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Setings;
