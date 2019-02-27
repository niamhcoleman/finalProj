import React from 'react';
import { WithWizard } from 'react-albus';

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div>
        {steps.indexOf(step) > 0 && (
          <button id = "prevBut" onClick={previous}>
            Back
          </button>
        )}
        {steps.indexOf(step) < steps.length - 1 && (
          <button id = "nextBut" onClick={next}>
            Next
          </button>
        )}
      </div>
    )}
  />
);

export default Navigation;