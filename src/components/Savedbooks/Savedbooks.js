import React from "react"
import API from "../../util/API";

class Saved extends React.Component{
    state = {
        savedBooks: [],
    }

   async componentDidMount() {
            const books = await API.getBooks();
            this.setState({savedBooks: books});
            }

            handleDelete = (id)=>{
                console.log(id);
                API.deleteBook(id)
                .then(res => console.log(res))
                .catch(err=> console.log(err))
            }
            
    render() {
        return (
            <div >    
                {this.state.savedBooks.map((book, i)=>(
                    console.log(book),
                <div key={i}>{book.Title}
                <button onClick={()=>this.handleDelete(book._id)}>Delete Movie</button>
            </div>
            
        ))}
                    
            </div>
        )
}

            }
    
    
        // API.getBooks({})
        // .then(res=>{
        //     this.setState({savedBooks: [res]}, function(){
        //         this.state.savedBooks.map((book, i) => {
        //             console.log(book)
        //         return <p>{book.data.id}</p>
        //     });
        //     })
        //     })
        // .catch(err=>console.log(err))
    // } 

    

export default Saved;