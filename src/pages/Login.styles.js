import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    padding: 24,
  },
  cabecalho: {
    alignSelf: 'center',
    maxWidth: 520,
    width: '100%',
  },
  voltar: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
  },
  textoVoltar: {
    color: '#1F6FEB',
    fontSize: 15,
    fontWeight: '600',
  },
  formulario: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    marginVertical: 'auto',
    maxWidth: 520,
    padding: 24,
    width: '100%',
  },
  titulo: {
    color: '#222222',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitulo: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 28,
    textAlign: 'center',
  },
  rotulo: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 7,
    marginTop: 14,
  },
  campo: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    minHeight: 50,
    paddingHorizontal: 14,
  },
  campoSenha: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 50,
  },
  entradaSenha: {
    flex: 1,
    fontSize: 16,
    minHeight: 48,
    paddingHorizontal: 14,
  },
  mostrarSenha: {
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 14,
  },
  textoMostrarSenha: {
    color: '#1F6FEB',
    fontSize: 13,
    fontWeight: '600',
  },
  campoComErro: {
    borderColor: '#C62828',
  },
  erro: {
    color: '#C62828',
    fontSize: 12,
    marginTop: 6,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#1F6FEB',
    borderRadius: 8,
    marginTop: 28,
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
