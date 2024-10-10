export default {
  logIn: {
    subtitle: '¡Inicia sesión para empezar!',
    username_textfield_label: 'Nombre de usuario',
    password_textfield_label: 'Contraseña',
    button_label: 'Iniciar sesión',
    question: '¿No tienes cuenta?',
    alternative: 'Registrarse',
    snackbar_message_success: 'Inicio de sesión exitoso',
    snackbar_message_error: 'Credenciales incorrectas',
  },
  logOut: {
    title: 'Cerrar sesión',
    message: '¿Está seguro de que desea cerrar sesión?',
    accept: 'Cerrar sesión',
    cancel: 'Cancelar',
  },
  signUp: {
    subtitle: 'Ingresa tus datos para registrarte',
    username_textfield_label: 'Nombre de usuario',
    email_textfield_label: 'Correo electrónico',
    password_textfield_label: 'Contraseña',
    password_confirmation_textfield_label: 'Confirma tu contraseña',
    button_label: 'Registrarse',
    question: '¿Ya eres miembro?',
    alternative: 'Iniciar sesión',
    snackbar_message_success: 'Registro exitoso. Ahora puedes iniciar sesión.',
    snackbar_message_error: 'Algo salió mal, por favor inténtalo de nuevo.',
  },
  rules: {
    required: 'Requerido',
    valid_email: 'Por favor, ingresa un correo electrónico válido.',
    password_length: 'La contraseña debe tener al menos {length} caracteres.',
    password_capital_letters:
      'La contraseña debe contener al menos 1 letra mayúscula',
    password_lower_case_letters:
      'La contraseña debe contener al menos 1 letra minúscula',
    password_numbers: 'La contraseña debe contener al menos 1 número',
    password_special_characters:
      "La contraseña debe contener al menos 1 carácter especial (!?@#$%^&*)(+=.<>{}[],/¿¡:;'|~`_-)",
    password_no_space: 'La contraseña no puede contener espacios',
    password_match: 'Las contraseñas no coinciden',
  },
}
