import React, { useState, useEffect, useRef } from 'react';

const Review = props => {
  const [number, setNumber] = useState('+33744668899')
  const [address, setAddress] = useState('2 downtown street, Mytown')
  const [birthday, setBirthday] = useState('you@email.com')
  
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      // Your useEffect code here to be run on update
      const { steps } = props
      const { number, address, birthday } = steps
      setNumber(number)
      setAddress(address)
      setBirthday(birthday)
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