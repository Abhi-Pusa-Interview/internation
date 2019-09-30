import React,{Component} from 'react';
import {connect} from 'react-redux';
import { modalDetails } from '../../data/state';
import {closeModal} from '../../actions/actions';
import './Modal.css';

class Modal extends Component{
    render(){
        //console.log("modal props",this.props);
        return(
            <div className="modal-container" style={{display:!this.props.modalDetails.modalStatus?'none':'block'}}>
                <div className="modal-wrapper">
                    <button onClick={this.props.closeModal}>Close Modal</button>
                    {this.props.modalDetails.modalContent}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal:() => dispatch(closeModal)
    }
}

const mapStateToProps = (state) => {
   return {modalDetails:state.modalDetails}
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);