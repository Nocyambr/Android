import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  conteudo: {
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    flexGrow: 1,
    maxWidth: 720,
    padding: 24,
    width: '100%',
  },
  cabecalho: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  usuario: {
    flex: 1,
    marginRight: 12,
    minWidth: 0,
  },
  saudacao: {
    color: '#222222',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textoApoio: {
    color: '#666666',
    fontSize: 14,
    marginTop: 4,
  },
  sair: {
    borderColor: '#1F6FEB',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  textoSair: {
    color: '#1F6FEB',
    fontWeight: '600',
  },
  botaoPressionado: {
    opacity: 0.65,
  },
  resumo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
  },
  aula: {
    color: '#1F6FEB',
    fontSize: 12,
    fontWeight: 'bold',
  },
  titulo: {
    color: '#222222',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  horario: {
    color: '#666666',
    fontSize: 15,
    marginTop: 8,
  },
  linhaProgresso: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rotuloProgresso: {
    color: '#333333',
    fontSize: 15,
  },
  progresso: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '600',
  },
  tituloSecao: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 28,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 16,
  },
  tituloCartao: {
    color: '#222222',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descricaoCartao: {
    color: '#666666',
    fontSize: 14,
    marginTop: 5,
  },
  lista: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  item: {
    alignItems: 'center',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    minHeight: 58,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemPressionado: {
    backgroundColor: '#F7F7F7',
  },
  checkbox: {
    alignItems: 'center',
    borderColor: '#999999',
    borderRadius: 4,
    borderWidth: 1,
    height: 22,
    justifyContent: 'center',
    marginRight: 12,
    width: 22,
  },
  checkboxConcluido: {
    backgroundColor: '#1F6FEB',
    borderColor: '#1F6FEB',
  },
  check: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  textoItem: {
    color: '#333333',
    flex: 1,
    fontSize: 15,
  },
  textoConcluido: {
    color: '#777777',
    textDecorationLine: 'line-through',
  },
});
