import React, { useState, useEffect } from 'react'
import './UserInfoView.css'

const UserInfoView = props => {
  const [number, setNumber] = useState('+33744668899')
  const [address, setAddress] = useState('2 downtown street, Mytown')
  const [birthday, setBirthday] = useState('2000.01.01')

  const changeUserInfo = () => {
    if (props.steps.number !== undefined) {
      setNumber(props.steps.number.value)
    }
    if (props.steps.address !== undefined) {
      setAddress(props.steps.address.value)
    }
    if (props.steps.birthday !== undefined) {
      setBirthday(props.steps.birthday.value)
    }
  }

  useEffect(() => {
    changeUserInfo()
  }, [])

  return (
    <div className='UserInfoView'>
      <h3 className='UserInfoView__title'>Summary</h3>
      <div className='UserInfoView__details'>
        <p className='UserInfoView__field'>Phone</p>
        <p className='UserInfoView__value'>{number}</p>

        <p className='UserInfoView__field'>Birthday</p>
        <p className='UserInfoView__value'>{birthday}</p>

        <p className='UserInfoView__field'>Address</p>
        <p className='UserInfoView__value'>{address}</p>
      </div>
    </div>
  )
}


export default UserInfoView