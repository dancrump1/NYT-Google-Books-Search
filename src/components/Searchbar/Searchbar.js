import React from "react"
import Results from "../../components/Results/Results"
import axios from "axios"
import API from "../../util/API";



class Searchbar extends React.Component{
    state = {
        input: "",
        movies: [],
    }

    handleChange = event => {
        this.setState({input: event.target.value}, function(){
        })
    }

    handleSubmit = () => {
        
            axios.get(`https://www.omdbapi.com/?i=tt3896198&s=${this.state.input}&apikey=80253409`).then(response=>{
                // console.log(response)
                let movieList = response.data.Search;
                    this.setState({
                        movies: movieList,
                    })
                // console.log(this.state)
            })
        };

        handleSave = (Title)=>{
            console.log(Title);
            API.saveBook({Title: `${Title}`})
            .then(res => console.log(res))
            .catch(err=> console.log(err))
        }
        
    

    render() {
        return (
        <div>
            <input type="text" value={this.state.input} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <Results movies={this.state.movies} handleSave={this.handleSave}/>
        </div>
        )
    }
}

export default Searchbar;