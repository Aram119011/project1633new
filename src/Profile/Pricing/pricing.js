import React from 'react';
import './pricing.css';


class Pricing extends React.Component {
    render() {
        return (
            <div id="pricing">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            {/*<button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                            <button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                            {/*<button  onClick={() => this.props.closeModalPricing()} type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                        </div>
                        <div className="modal-body">
                            <div className="content-name">
                                <h2>Pricing</h2>
                            </div>
                            <p>Select a plan</p>
                            <div className="pricing-banner">
                                <div className="btns-bar">
                                    <button className="billed-btn active_btn" data-show=".monthly-content">Billed
                                        Monthly
                                    </button>
                                    <button className="billed-btn" data-show=".yearly-content">Billed Yearly</button>
                                </div>
                                <div>
                                    <div className="monthly-content billed-content">
                                        <div className="starter-content">
                                            <div className="head-bar">
                                                <p>Starter</p>
                                            </div>
                                            <div className="body-bar">
                                                <p className="price-content">$3.5</p>
                                                <p className="paid-content">paid annually</p>
                                                <div className="user-quality-content">
                                                    <p>1 User</p>
                                                </div>
                                                <button className="get-started-btn">Get Started</button>
                                                <p className="description-content">
                                                    No ads Sync meetings to calendar Deadlines and reminders Ask for
                                                    email,phone,address Track
                                                    meting
                                                    invitation Zapier Integration
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <div className="head-bar">
                                                <p>Team</p>
                                            </div>
                                            <div className="body-bar">
                                                <p className="price-content">$25</p>
                                                <p className="paid-content">paid annually</p>
                                                <div className="user-quality-content">
                                                    <p>
                                                        5 User
                                                    </p>
                                                    <span>
                                                        <button className="minus-btn">-</button>
                                                        <button className="plus-btn">+</button>
                                                    </span>
                                                </div>
                                                <button className="get-started-btn">Get Started</button>
                                                <p className="description-content">
                                                    No ads Sync meetings to calendar Deadlines and reminders Ask for
                                                    email,phone,adress Track
                                                    metting
                                                    invitation Zapier Integration Custom logo and branding Personalized
                                                    scheduling URL Priority user
                                                    management
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="yearly-content billed-content hide">
                                        <div className="starter-content">
                                            <div className="head-bar">
                                                <p>Starter</p>
                                            </div>
                                            <div className="body-bar">
                                                <p className="price-content">$5.5</p>
                                                <p className="paid-content">paid annually</p>
                                                <div className="user-quality-content">
                                                    <p>1 User</p>
                                                </div>
                                                <button className="get-started-btn">Get Started</button>
                                                <p className="description-content">
                                                    No ads Sync meetings to calendar Deadlines and reminders Ask for
                                                    email,phone,address Track
                                                    meting
                                                    invitation Zapier Integration
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <div className="head-bar">
                                                <p>Team</p>
                                            </div>
                                            <div className="body-bar">
                                                <p className="price-content">$50</p>
                                                <p className="paid-content">paid annually</p>
                                                <div className="user-quality-content">
                                                    <p>
                                                        5 User
                                                    </p>
                                                    <span>
                                                        <button className="minus-btn">-</button>
                                                        <button className="plus-btn">+</button>
                                                    </span>
                                                </div>
                                                <button className="get-started-btn">Get Started</button>
                                                <p className="description-content">
                                                    No ads Sync meetings to calendar Deadlines and reminders Ask for
                                                    email,phone,adress Track
                                                    metting
                                                    invitation Zapier Integration Custom logo and branding Personalized
                                                    scheduling URL Priority user
                                                    management
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Pricing;
