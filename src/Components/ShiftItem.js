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

function ShiftItem() {
  return (
    <ShiftWrapper>
      <Shift>
        Data
      </Shift>
    </ShiftWrapper>
  );
}

export default ShiftItem;