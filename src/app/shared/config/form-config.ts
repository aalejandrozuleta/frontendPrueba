export const FORM_CONFIG = {
  signUp: [
    {
      type: 'text',
      name: 'name_user',
      model:'',
      placeholder: 'Ingrese su nombre',
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    {
      type: 'text',
      name: 'lastName_user',
      model:'',
      placeholder: 'Ingrese su apellido',
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    {
      type: 'text',
      name: 'country_user',
      model:'',
      placeholder: 'Ingrese su país',
      required: true,
      minLength: 3,
      maxLength: 12,
    },
    {
      type: 'text',
      name: 'phone_user',
      model:'',
      placeholder: 'Ingrese su numero telefónico',
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    {
      type: 'email',
      name: 'email_user',
      model:'',
      placeholder: 'Ingrese su correo',
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    {
      type: 'password',
      name: 'password_user',
      model:'',
      placeholder: 'Ingrese su contraseña',
      required: true,
      minLength: 8,
      maxLength: 100,
    },
    {
      type: 'text',
      name: 'user_type',
      model:'',
      placeholder: 'Ingrese el tipo de usuario',
      required: true,
      minLength: 4,
      maxLength: 10,
    },
  ],
  login: [],
};
