import { fireEvent, render } from '@testing-library/react-native';

import { Home } from '../src/pages/Home';
import { Login } from '../src/pages/Login';
import { Welcome } from '../src/pages/Welcome';

describe('main app flow', () => {
  it('opens the login screen from the welcome action', async () => {
    const navigation = { navigate: jest.fn() };
    const screen = await render(<Welcome navigation={navigation} />);

    await fireEvent.press(screen.getByLabelText('Começar'));

    expect(navigation.navigate).toHaveBeenCalledWith('Login');
  });

  it('shows field errors when the login form is submitted empty', async () => {
    const navigation = { goBack: jest.fn(), replace: jest.fn() };
    const screen = await render(<Login navigation={navigation} />);

    await fireEvent.press(screen.getByLabelText('Entrar'));

    expect(screen.getByText('Informe seu e-mail.')).toBeTruthy();
    expect(screen.getByText('Informe sua senha.')).toBeTruthy();
    expect(navigation.replace).not.toHaveBeenCalled();
  });

  it('enters the home screen with a name derived from a valid email', async () => {
    const navigation = { goBack: jest.fn(), replace: jest.fn() };
    const screen = await render(<Login navigation={navigation} />);

    await fireEvent.changeText(
      screen.getByLabelText('E-mail'),
      'maycon.santos@email.com',
    );
    await fireEvent.changeText(screen.getByLabelText('Senha'), '1234');
    await fireEvent.press(screen.getByLabelText('Entrar'));

    expect(navigation.replace).toHaveBeenCalledWith('Home', {
      studentName: 'Maycon Santos',
    });
  });

  it('updates the checklist and returns to welcome on logout', async () => {
    const navigation = { reset: jest.fn() };
    const screen = await render(
      <Home
        navigation={navigation}
        route={{ params: { studentName: 'Maycon Santos' } }}
      />,
    );

    expect(screen.getByText('Olá, Maycon Santos')).toBeTruthy();
    expect(screen.getByText('0/4')).toBeTruthy();

    await fireEvent.press(
      screen.getByLabelText(
        'Marcar Node.js LTS instalado como concluído',
      ),
    );

    expect(screen.getByText('1/4')).toBeTruthy();
    expect(
      screen.getByLabelText(
        'Desmarcar Node.js LTS instalado como concluído',
      ),
    ).toBeTruthy();

    await fireEvent.press(screen.getByLabelText('Sair'));

    expect(navigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  });
});
