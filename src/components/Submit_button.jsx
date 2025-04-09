import React from 'react';
const Submitbutton = ({ label = "Submit" }) => {
  return (
    <button type="submit" className="submit-btn">
      {label}
      {/* apne aap button ka naam submit kar dega agr nhi diya hoga */}
    </button>
  );
};
  
  export default Submitbutton;