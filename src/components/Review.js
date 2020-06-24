import React, { useState, useEffect } from 'react';

const Review = props => {
  const [number, setNumber] = useState('+33744668899')
  const [address, setAddress] = useState('2 downtown street, Mytown')
  const [birthday, setBirthday] = useState('you@email.com')

  useEffect(() => {
    if (props.steps.number !== undefined) {
      setNumber(props.steps.number.value)
    }
    if (props.steps.address !== undefined) {
      setAddress(props.steps.address.value)
    }
    if (props.steps.birthday !== undefined) {
      setBirthday(props.steps.birthday.value)
    }
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Phone number</td>
            <td>{number}</td>
          </tr>
          <tr>
            <td>Home address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>{birthday}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default Review