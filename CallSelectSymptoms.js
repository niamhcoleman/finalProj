import React from 'react';
import SelectSymptoms from './SelectSymptoms';


class CallSelectSymptoms extends React.Component {   
  render() {
      var arr=["Acne", "Vomiting", "Insomnia", "Loss of Appetite", "Bloating"];
      var elements=[];
      for(var i=0;i<arr.length;i++){
           // push the component to elements
          elements.push(<SelectSymptoms value={ arr[i] } />);
      }

      return (
        <div> 
          <p id = "heading"><u>What Symptoms do you Have Today?</u></p>
          {elements}
        </div>
    );
}
}

export default CallSelectSymptoms;