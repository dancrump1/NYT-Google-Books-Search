import React from "react"

function Results(props){

    console.log(props)


        return (
            <div>
                    {/* {props.movies.map(movie => (
                        <div key={movie.Title}>{movie.Title}</div>
                    ))}             */}

                    <div>{props.movies.Title}</div>
                    <div>{props.movies.Plot}</div>
                    <button onClick={props.handleSave}>Save Movie</button>

            </div>
        )
    }



export default Results;