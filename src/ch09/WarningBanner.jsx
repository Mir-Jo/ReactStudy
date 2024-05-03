import React from "react";
function WarningBanner(props){
  // const [warning, setWarning] = useState(true);
  if(!props.warning){
    return null;
  }
  return (
    <div>경고!</div>
  );
}
export default WarningBanner;