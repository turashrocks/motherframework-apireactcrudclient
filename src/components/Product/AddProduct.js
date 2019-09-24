import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {connect} from 'react-redux'
import {createProduct} from '../../actions/productActions'

class AddProduct extends Component {
    constructor(){
        //Since we are extending the component class to we need to call super too
        super();
        //Set an intial state for all our input fields
        this.state={
            "title": "",
            "description": "",
            "updated_at": "",
            "created_at": "",
            "id": "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const newProduct = {
            "title": this.state.title,
            "description": this.state.description,
            "updated_at": this.state.updated_at,
            "created_at": this.state.created_at,
            "id": this.state.id
        }
        //console.log(newProduct);
        this.props.createProduct(newProduct, this.props.history)
    }

    render() {
        const { errors } = this.state;
        return (
            <>
                <h2>{errors.title}</h2>
                 <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create / Edit Product form</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        //className="form-control form-control-lg" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.title,
                                        })}
                                        placeholder="Product Name" 
                                        name="title"
                                        //value={this.state.title}
                                        onChange={this.onChange}/>
                                        {errors.title && (
                                            <div className="invalid-feedback">{errors.title}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        //className="form-control form-control-lg" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.id,
                                        })}
                                        placeholder="Unique Product ID"
                                        name="id"
                                        onChange={this.onChange}
                                        //value={this.state.id}
                                        disabled />
                                        {errors.id && (
                                            <div className="invalid-feedback">{errors.id}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <textarea 
                                        //className="form-control form-control-lg" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.description,
                                        })}
                                        placeholder="Product Description"
                                        name="description"
                                        //value={this.state.description}
                                        onChange={this.onChange}/>
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input 
                                        type="date" 
                                        className="form-control form-control-lg"
                                        name="start_date"/>
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="end_date" />
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

// mapping state to props from redux
const mapStateToProps = state => ({
    errors: state.errors,
});

AddProduct.propType = {
    createProduct: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {createProduct},) (AddProduct);
