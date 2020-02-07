import React from 'react';

const Card = ({ id, name, species, gender, status }) => {
  return(
    <div className='ba bw2 br2 ma2 dib bg-light-yellow b--light-yellow shadow-5'>
      <img
        alt='rick-and-morty-character'
        src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
        style={{width:'250px', height:'250px' }}
      />
      <div>
        <h2>{name}</h2>
        {
          gender !== 'unknown' ?
            <h4>{`${species} ${gender}`}</h4> :
            <h4>{`${species} species`}</h4>
        }
        {
          status !== 'unknown' ?
            <h5><i>Status - {status}</i></h5> :
            <h5><i>Status -  Yet to be found</i></h5>
        }
        <h5>#{id}</h5>
      </div>
    </div>
  );

};

export default Card;