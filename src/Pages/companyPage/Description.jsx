import React from 'react'

const Description = ({companyInformation}) => {
  return (
    <div className="bg-light rounded p-4 mt-4 ">
        <h3 className="mb-4">Company Description</h3>
        <p style={{fontSize: "1.2rem"}}>{companyInformation?.desc}</p>
    </div>

  )
}

export default Description
