import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { steps } from './ChatbotSteps'

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

const Chatbot = ({ botAvatarUrl, userAvatarUrl }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} botAvatar={botAvatarUrl} userAvatar={userAvatarUrl} height='400px' />
    </ThemeProvider>
  )
}

export default Chatbot
