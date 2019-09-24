import React, { Component } from 'react'
import ProductItem from './Product/ProductItem'
import CreateProductButton from './Product/CreateProductButton'
import { connect } from "react-redux"
import { getProducts } from "../actions/productActions"
import PropTypes from "prop-types"


class Dashboard extends Component {
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        return (
            <>
                <div className="projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-4 text-center">Products</h1>
                                <br />
                                <CreateProductButton/>
                                <br />
                                <hr />
                                <ProductItem/> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Dashboard.propTypes = {
    product: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(
    mapStateToProps,
    { getProducts }
)(Dashboard);
