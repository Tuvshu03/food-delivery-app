import React from 'react'

export   const ValidatePassword = (password:any) => {
    const regex = /^(?=.*[a-z])/
    return regex.test(password);
    
  }

