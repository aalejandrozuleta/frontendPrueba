// form-config.ts
export const FORM_CONFIG = {
  signUp: [
    { type: 'text', name: 'username', placeholder: 'Username', required: true, minLength: 3, maxLength: 20 },
    { type: 'email', name: 'email', placeholder: 'Email', required: true },
    { type: 'password', name: 'password', placeholder: 'Password', required: true, minLength: 8 }
  ],
  login:[
    
  ]
};
