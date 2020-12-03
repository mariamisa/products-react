import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    state={
        filterText:'',
        inStockOnly:false
    }
    handelFilterText=({target:{value}})=>{
        const filterText=value
        this.setState({filterText})
    }
    handelOnStock=()=>{
        this.setState({inStockOnly:!this.state.inStockOnly})
    }
    render() {
        const {inStockOnly,filterText}=this.state;
        return (
            <div style={{margin:"auto",width:'50%',textAlign:'left',marginTop:50}}>
                <SearchBar
                    onSearch={this.handelFilterText}
                    onCheck={this.handelOnStock}
                />
                <ProductTable 
                    inStockOnly={inStockOnly}
                    filterText={filterText}
                />
            </div>
        )
    }
}
