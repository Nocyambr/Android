import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  imagem: {
    borderRadius: 28,
    height: 128,
    marginBottom: 32,
    width: 128,
  },
  titulo: {
    color: '#222222',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#444444',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 8,
  },
  descricao: {
    color: '#666666',
    fontSize: 15,
    marginTop: 12,
    textAlign: 'center',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#1F6FEB',
    borderRadius: 8,
    marginTop: 36,
    minWidth: 180,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  botaoPressionado: {
    opacity: 0.75,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
