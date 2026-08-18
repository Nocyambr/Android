import { getStudentName, validateLogin } from '../src/utils/login';

describe('validateLogin', () => {
  it('requires both fields', () => {
    expect(validateLogin({ email: '', password: '' })).toEqual({
      email: 'Informe seu e-mail.',
      password: 'Informe sua senha.',
    });
  });

  it('rejects malformed email and a short password', () => {
    expect(validateLogin({ email: 'aluno', password: '123' })).toEqual({
      email: 'Digite um e-mail válido.',
      password: 'A senha precisa ter pelo menos 4 caracteres.',
    });
  });

  it('accepts a valid local demo login', () => {
    expect(
      validateLogin({ email: '  aluno@email.com  ', password: '1234' }),
    ).toEqual({});
  });
});

describe('getStudentName', () => {
  it('turns the first two email-name segments into a display name', () => {
    expect(getStudentName('maycon.santos@email.com')).toBe('Maycon Santos');
  });

  it('uses a safe fallback when the email has no local part', () => {
    expect(getStudentName()).toBe('Aluno');
  });
});
