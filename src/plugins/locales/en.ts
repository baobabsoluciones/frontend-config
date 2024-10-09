export default {
  logIn: {
    subtitle: 'Log in to get started!',
    username_textfield_label: 'Username',
    password_textfield_label: 'Password',
    button_label: 'Log in',
    question: `Don't have an account?`,
    alternative: 'Sign up',
    snackbar_message_success: 'Successfully logged in',
    snackbar_message_error: 'Incorrect credentials',
  },
  logOut: {
    title: 'Log out',
    message: 'Are you sure you want to log out?',
    accept: 'Log me out',
    cancel: 'Cancel',
  },
  signUp: {
    subtitle: 'Enter your details to register',
    username_textfield_label: 'Username',
    email_textfield_label: 'Email',
    password_textfield_label: 'Password',
    password_confirmation_textfield_label: 'Confirm your password',
    button_label: 'Sign up',
    question: 'Already a memeber?',
    alternative: 'Log in',
    snackbar_message_success: 'Register success. You can log in now.',
    snackbar_message_error: 'Something went wrong, please try again.',
  },
  rules: {
    required: 'Required',
    valid_email: 'Please enter a valid email adress.',
    password_length: 'Password must be at least {length} characters long.',
    password_capital_letters: 'Password must contain at least 1 capital letter',
    password_lower_case_letters:
      'Password must contain at least 1 lower case letter',
    password_numbers: 'Password must contain at least 1 number',
    password_special_characters:
      "Password must contain at least 1 special character (!?@#$%^&*)(+=.<>{}[],/¿¡:;'|~`_-)",
    password_no_space: 'The password can not contain any spaces',
    password_match: 'Passwords do not match',
  },
}
