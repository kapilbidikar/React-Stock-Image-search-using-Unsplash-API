import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import InfiniteScroll from "react-infinite-scroll-component";


class App extends React.Component {
    state = {images: [] ,page: 1, sterm:''};

    onSearchSubmit = async (term) => {
        
        const response = await unsplash.get('/search/photos',{
            params: {page: this.state.page, query:term },
            
            
        });
        this.setState({images: response.data.results, sterm:term});
        console.log(this.state.images)
        
    }

    fetchMoreData = () => {
        this.setState({page: this.state.page+1})
        this.onSearchSubmit(this.state.sterm)
        this.setState({images:this.state.images.concat(this.state.images)
        })
        return (
        <div className = "ui container" ><ImageList images= {this.state.images}/></div> 
        )
    }
    // render(){

//     return (
//     <div className = "ui container" 
//         style ={{marginTop : '10px'}}>    
//         <SearchBar onSubmit = {this.onSearchSubmit}/>
        
//         <ImageList images = {this.state.images}/>    
//     </div>);
// }
    render() {
        return (
            <div className = "ui container" 
                    style ={{marginTop : '10px'}}>    
                    <SearchBar onSubmit = {this.onSearchSubmit}/>
                    <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    >
                        
                     
                     <ImageList images={this.state.images}/> 
                        
                    
                    
                    
                    </InfiniteScroll>
        </div>
        );
    }
}

export default App;