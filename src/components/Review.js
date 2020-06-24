import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';


// class Review extends React.Component {
//   state = {
//     number: 'nanana',
//     address: '10',
//     birthday: '10'
//   }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { number, address, birthday } = steps;

//     this.setState({ number, address, birthday });
//   }

//   render() {
//     const { number, address, birthday } = this.state;
//     return (
//       <div style={{ width: '100%' }}>
//         <h3>Summary</h3>
//         <table>
//           <tbody>
//             <tr>
//               <td>number</td>
//               <td>{ number}</td>
//             </tr>
//             <tr>
//               <td>address</td>
//               <td>{address}</td>
//             </tr>
//             <tr>
//               <td>birthday</td>
//               <td>{birthday}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

const Review = props => {
  const [number, setNumber] = useState('+33744668899')
  const [address, setAddress] = useState('2 downtown street, Mytown')
  const [birthday, setBirthday] = useState('you@email.com')

  // useEffect(() => {
  //   const { steps } = props
  //   const { number, address, birthday } = steps
  //   setNumber(number)
  //   setAddress(address)
  //   setBirthday(birthday)
  // })
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
            <td>{isInitialMount.current ? number : number.value}</td>
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