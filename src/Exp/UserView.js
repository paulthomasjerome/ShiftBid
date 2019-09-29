import React from 'react';

function UserView(props) {
  return (
    <div>
      {props.shifts.map(shift => shift)}
    </div>
  );
}

export default UserView;