import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Review from './Review'

// const initialPersonalInfo = {
//   userNumber: attend je suis encore en train de travailler dessus, j'attends de voir si ca marche avant de refactor OK!!
// }


const steps = [
  {
    id: '0',
    message: `Hello -client-, I'm here to help you !`,
    trigger: '1',
  },
  {
    id: '1',
    message: 'What do you want to do to occupy your time?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: '1 Confirm your Personal information', trigger: '3' },
      { value: 2, label: '2 Symptoms', trigger: '4' },
      { value: 3, label: '3 Read', trigger: '8' },
    ],
  },
  {
    id: '3',
    message: 'Check your personal information',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <Review />,
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
    id: 'number',
    message: 'What is your phone number?',
    user: true,
    trigger: '3',
  },
  {
    id: 'update-number',
    update: 'number',
    trigger: '3',
  },
  {
    id: 'update-address',
    message: 'How old are you?',
    update: 'address',
    trigger: '3',
  },

  {
    id: 'update-birthday',
    message: 'How old are you?',
    update: 'birthday',
    trigger: '3',
  },
  {
    id: 'personal-info-end-message',
    message: 'Thanks! Your data was submitted successfully!',
    trigger: 1,
  },
  {
    id: '4',
    message: 'Are you allergic to anything? something?',
    trigger: 'symptom'
  },
  {
    id: 'symptom',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'Do you smoke?',
    trigger: 'duration'
  },
  {
    id: 'duration',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'Does it intermittent or constant? If intermittent, how long does it last?',
    trigger: 'frequency'
  },
  {
    id: 'frequency',
    user: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'Thank you ! All your answers would be considered carefully by the doctor',
    trigger: '8'
  },
  {
    id: '8',
    message: 'Bye!',
    end: true,
  }
]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
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
