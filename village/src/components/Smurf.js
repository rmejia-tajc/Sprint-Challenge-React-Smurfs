import React from 'react';

const Smurf = props => {

  const smurf = props.smurfs.find(
      smurf => `${smurf.id}` === props.match.params.smurfId
  );

  if (!smurf) return <h2>Cannot find that smurf!</h2>;

  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

