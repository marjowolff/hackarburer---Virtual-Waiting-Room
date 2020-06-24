import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import UserInfoView from './UserInfoView'


const steps = [
  {
    id: '0',
    message: `Hello -client-, I'm here to help you ! This is your first visit to -Dr.Stranger-. I'm so happy to have you here`,
    trigger: '1',
  },
  {
    id: '1',
    message: `While you wait, why not take some time to provide some information?`,
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: '1 Confirm your Personal information', trigger: '4' },
      { value: 2, label: '2 Preliminary questions', trigger: '5' },
      // { value: 3, label: '3 Read', trigger: '8' },
    ],
  },
  {
    id: '3',
    message: 'Your information is successfully updated',
    trigger: 'review',
  },
  {
    id: '4',
    message: 'Confirm your personal information',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <UserInfoView />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update some field?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'personal-info-end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'What field would you like to update?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'number', label: 'Phone Number', trigger: 'update-number' },
      { value: 'address', label: 'Home address', trigger: 'update-address' },
      { value: 'birthday', label: 'Birthday', trigger: 'update-birthday' },
    ],
  },
  {
    id: 'update-number',
    message: 'What is your updated phone number?',
    trigger: 'number',
  },
  {
    id: 'number',
    user: true,
    trigger: '3',
  },
  {
    id: 'update-address',
    message: 'What is your updated address?',
    trigger: 'address',
  },
  {
    id: 'address',
    user: true,
    trigger: '4',
  },
  {
    id: 'update-birthday',
    message: 'What is your updated birthday?',
    trigger: 'birthday',
  },
  {
    id: 'birthday',
    user: true,
    trigger: '4',
  },
  {
    id: 'personal-info-end-message',
    message: 'Thanks! Your data was submitted successfully!',
    trigger: '1',
  },
  {
    id: '5',
    message: 'Are you allergic to something?',
    trigger: 'allergy'
  },
  {
    id: 'allergy',
    options: [
      { value: 'yes', label: 'Yes', trigger: '6' },
      { value: 'no', label: 'No', trigger: '6' },
    ]
  },
  {
    id: '6',
    message: 'Do you smoke?',
    trigger: 'smoke'
  },
  {
    id: 'smoke',
    options: [
      { value: 'yes', label: 'Yes', trigger: '7' },
      { value: 'no', label: 'No', trigger: '7' },
    ]
  },
  {
    id: '7',
    message: 'Are you taking any medications?',
    trigger: 'medications'
  },
  {
    id: 'medications',
    options: [
      { value: 'yes', label: 'Yes', trigger: '8' },
      { value: 'no', label: 'No', trigger: '8' },
    ]
  },
  {
    id: '8',
    message: 'Thank you ! All your answers would be considered carefully by the doctor',
    trigger: '9'
  },
  {
    id: '9',
    message: 'Bye!',
    end: true,
  }
]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Roboto',
  headerBgColor: '#FF7E00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FF7E00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const Chatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  )
}

export default Chatbot
