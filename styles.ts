import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#172A3A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 68,
    width: '100%',
    alignSelf: 'center',
    },

  header: {
    backgroundColor: '#243B53',
    padding: 30,
    width: '100%',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#526A7C',
    borderRadius: 12,
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#F2F0E8',
    fontSize: 20,
  },

  input: {
    width: 200,
    height: 45,
    backgroundColor: '#172A3A',
    color: '#F2F0E8',
    borderWidth: 1,
    borderColor: '#71869A',
    borderRadius: 8,
    padding: 10,
  },

  conversao: {
    width: '100%',
    backgroundColor: '#243B53',
    borderWidth: 1,
    borderColor: '#526A7C',
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
  },

  texto: {
    color: '#F2F0E8',
    fontSize: 18,
  },

  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#526A7C',
    marginVertical: 12,
  },

  botao: {
    backgroundColor: '#3B8067',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: 160,
  },

  textoBotao: {
    color: '#F2F0E8',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoHover: {
    backgroundColor: '#4B9A7D',
  },

  resultado: {
    width: '100%',
    backgroundColor: '#243B53',
    borderWidth: 1,
    borderColor: '#526A7C',
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
    alignItems: 'center',
  },

  identificacao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  titulos: {
    flex: 1,
    justifyContent: 'center',
  },

  valorResultado: {
    color: '#F2F0E8',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },

  logoContainer: {
    backgroundColor: '#F2F0E8',
    borderWidth: 1,
    borderColor: '#71869A',
    borderRadius: 8,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rotulo: {
    color: '#F2F0E8',
    fontSize: 16,
    marginBottom: 8,
  },

});

export default styles;