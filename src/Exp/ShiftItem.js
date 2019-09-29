import React from 'react';
import styled from 'styled-components';

const Shift = styled.div`
  font-size: 1rem;
  font-family: sans-serif;
`;

const ShiftWrapper = styled.div`
  background-color: cornsilk;
  border-radius: 1rem;
  border-style: outset;
  border-width: 1px;
  box-sizing: border-box;
  box-shadow: 4px 3px 7px 0 black;
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  width: 85vw;
`;
//TODO add props to ShiftItem
function ShiftItem() {
  return (
    <ShiftWrapper>
      <Shift>
        <div>
        Monday -> 
        </div>
        <div>
        Tuesday -> 
        </div>
        <div>
        Wednesday -> 
        </div>
        <div>
        Thursday -> 
        </div>
        <div>
        Friday ->
        </div>
        <div>
        Saturday -> 
        </div>
        <div>
        Sunday -> 
        </div> 
        <div>
        UP
        </div>
        <div>
        DN
        </div>
        <div>
        AD
        </div>
      </Shift>
    </ShiftWrapper>
  );
}
/*TODO turn UP DN and AD into there own components as styled buttons, 
they function as a fallback for drag-click functionality, when in the 
shifts-selected section there should be an rm button where ad goes
*/
export default ShiftItem;