import React from 'react'

const ReverseKt = () => {
  return (
    <div>Test</div>
  )
}

const customize = () => {
    window.Digit.ComponentRegistry.setComponent(
        "SelectPincode",
        ReverseKt
    )
}

export default customize;