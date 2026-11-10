
import { StatusBar } from 'expo-status-bar';
import {  Text,  View,  TextInput,  TouchableOpacity,  Image, Pressable, ScrollView, useWindowDimensions} from 'react-native';
import { useState } from 'react';
import { Host, Picker, Column } from '@expo/ui';
import styles from './styles';
import type { Escala } from './script';
import { converterTemperatura } from './script';
import {  SafeAreaProvider,  SafeAreaView} from 'react-native-safe-area-context';


export default function App() {
  const [temperatura, setTemperatura] = useState('');
  const [origem, setOrigem] = useState<Escala | ''>('');
  const [destino, setDestino] = useState<Escala | ''>('');
  const [resultado, setResultado] = useState<number | null>(null);
  const simbolos = { Eduardinho: '°Edn', Celsius: '°C', Fahrenheit: '°F', Kelvin: 'K',};
  const [mouseSobreBotao, setMouseSobreBotao] = useState(false);
  const [mouseSobreLimpar, setMouseSobreLimpar] = useState(false);
  const { width } = useWindowDimensions();
  const larguraConteudo = width < 768  ? '100%'  : Math.min(width * 0.75, 900);

  function converter() {
    if (temperatura === '' || origem === '' || destino === '') {
      return;
    }

    const valorConvertido = converterTemperatura(
      Number(temperatura),
      origem,
      destino
    );

    setResultado(valorConvertido);
  }

  // limpa os campos e o resultado
  function limpar() {
    setTemperatura('');
    setOrigem('');
    setDestino('');
    setResultado(null);
  }

  return (
  <SafeAreaProvider>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#172A3A',
      }}
    >

      <ScrollView
        style={{ backgroundColor: '#172A3A' }}
        contentContainerStyle={{ flexGrow: 1,  justifyContent: 'center', }}
      >

        <View
          style={[
            styles.container,
            { width: larguraConteudo }
          ]}
        >

    <View style={styles.header}>

  {/* elementos principais da identificação */}
  <View style={styles.identificacao}>

    {/* logo original */}
    <View style={styles.logoContainer}>
  <Image
      source={require('./assets/logo-eduardinho.png')}
      style={{
        width: 90,
        height: 80,
        resizeMode: 'contain',
        transform: [{ scale: 1.15 }],
      }}
    />
  </View>

    {/* título e subtítulo */}
    <View style={styles.titulos}>
          <Text style={styles.headerTitle}>
            Escala Eduardinho
          </Text>
        
        </View>

      </View>

      {/* linha divisória */}
      <View style={styles.divisor} />
          <Text style={styles.headerSubtitle}>Conversor de temperaturas</Text>
    </View>
      
      <View style={styles.conversao}>

      <Text style={styles.rotulo}>Digite a temperatura:</Text>

        <TextInput
          style={styles.input}
          value={temperatura}
          onChangeText={setTemperatura}
          keyboardType="numeric" /* abre teclado numérico */
        />

      <View style={styles.divisor} />

      <Text style={styles.rotulo}>Escala de origem</Text>
        
        <Host
          matchContents={{ vertical: true }}
          style={{ width: '100%' }}
        >
          <Column alignment="center">
            <Picker
              selectedValue={origem}
              onValueChange={setOrigem}
              appearance="menu"
            >
              <Picker.Item label="Selecione a escala de origem" value="" />
              <Picker.Item label="Eduardinho (°Edn)" value="Eduardinho" />
              <Picker.Item label="Celsius (°C)" value="Celsius" />
              <Picker.Item label="Fahrenheit (°F)" value="Fahrenheit" />
              <Picker.Item label="Kelvin (K)" value="Kelvin" />
            </Picker>
          </Column>  
        </Host>

      <View style={styles.divisor} />

      <Text style={styles.rotulo}>Escala de destino</Text>  

        <Host
          matchContents={{ vertical: true }}
          style={{ width: '100%' }}
        >
        <Column alignment="center">
            <Picker
              selectedValue={destino}
              onValueChange={setDestino}
              appearance="menu"
            >
              <Picker.Item label="Selecione a escala de destino" value="" />
              <Picker.Item label="Eduardinho (°Edn)" value="Eduardinho" />
              <Picker.Item label="Celsius (°C)" value="Celsius" />
              <Picker.Item label="Fahrenheit (°F)" value="Fahrenheit" />
              <Picker.Item label="Kelvin (K)" value="Kelvin" />
            </Picker>
          </Column>
        </Host>

        <View style={styles.divisor} />

        {/* botão de conversão */}
      <Pressable
        onHoverIn={() => setMouseSobreBotao(true)}
        onHoverOut={() => setMouseSobreBotao(false)}
      >
        <TouchableOpacity
          style={[
            styles.botao,
            mouseSobreBotao && styles.botaoHover
          ]}
          onPress={converter}
        >
          <Text style={styles.textoBotao}>
            Converter
          </Text>
        </TouchableOpacity>
      </Pressable>
    
      </View>

      <View style={styles.resultado}>

      {resultado !== null && (
        <>
          <Text style={styles.texto}>
            TEMPERATURA CONVERTIDA
          </Text>

          <Text style={styles.valorResultado}>
            {resultado.toFixed(2)} {destino !== '' ? simbolos[destino] : ''}
          </Text>
        </>
      )}

        <Pressable
          onHoverIn={() => setMouseSobreLimpar(true)}
          onHoverOut={() => setMouseSobreLimpar(false)}
        >
          <TouchableOpacity
            style={[
              styles.botao,
              mouseSobreLimpar && styles.botaoHover
            ]}
            onPress={limpar}
          >
            <Text style={styles.textoBotao}>
              Limpar
            </Text>
          </TouchableOpacity>
        </Pressable>

      </View>

              <StatusBar style="auto" />

        </View>
      </ScrollView>

    </SafeAreaView>
  </SafeAreaProvider>
  );
}
