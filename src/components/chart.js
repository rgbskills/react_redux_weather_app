import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function avrage(data){
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
    return(
      <div>
        <Sparklines width={100} height={20} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{avrage(props.data)} {props.units}</div>
      </div>
    );
}