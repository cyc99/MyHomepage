import React from "react";

function SimpleInfo () {
    return (
      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'textShadow': 'grey 0px 0 0px'}}>
        최영철 <br/>
        Junior Software Engineer
        <img style = {{'height': '50%', 'width': '50%', 'margin': '30px', 'borderRadius': '30px'}} alt='testing' src={ require('../../images/img.jpg') } />
      </div>
    );
}


export default SimpleInfo;