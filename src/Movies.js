import React from 'react';

class Movies extends React.Component{
    render(){
        return(
            <div className='movieContainer'>
                {this.props.movies.map((item)=>(
                <article key={item.id}>
                    <div className="film">
                        <img 
                        src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                        alt={`Movie poster for ${item.title}`}
                        ></img>
                    </div>
                    <div className='titleContainer'>
                        <h2>{item.title}</h2>
                        <p className='star'>{item.vote_average}</p>
                    </div>
                    <h3>Overview</h3>
                    <p>{item.overview === '' ? 'No overview has been submitted for this movie.' : item.overview} </p>
                    <br />
                </article>
                ))}       
            </div>
        );
    }
}

export default Movies;