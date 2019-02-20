import React from "react"

function Results(props){

    console.log(props)


        return (
            <div>
                    {props.movies.map((movie, i) => (
                        <div key={movie.imdbID}>{movie.Title}
                            <button onClick={()=>props.handleSave(movie.Title)}>Save Movie</button>
                        </div>
                    ))}            

                {/* <div>{props.movies.Title}
                <div>{props.movies.Plot}</div>
                </div> */}
                    

            </div>
        )
    }



export default Results;