const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin({ email = '', password = '' }) {
  const errors = {};
  const normalizedEmail = email.trim();

  if (!normalizedEmail) {
    errors.email = 'Informe seu e-mail.';
  } else if (!EMAIL_PATTERN.test(normalizedEmail)) {
    errors.email = 'Digite um e-mail válido.';
  }

  if (!password) {
    errors.password = 'Informe sua senha.';
  } else if (password.length < 4) {
    errors.password = 'A senha precisa ter pelo menos 4 caracteres.';
  }

  return errors;
}

export function getStudentName(email = '') {
  const localPart = email.trim().split('@')[0] || '';
  const words = localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return words.join(' ') || 'Aluno';
}
