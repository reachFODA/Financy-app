import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Events from '../../components/Events'

const list = [
  {
    id: 1,
    label: 'Boleto',
    value: '300,00',
    date: '17/08/2022',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix',
    value: '200,00',
    date: '09/09/2022',
    type: 1,
  },
  {
    id: 3,
    label: 'Pc gamer',
    value: '500,00',
    date: '30/07/2020',
    type: 1,
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Filipe Gomes"/>
      <Balance balance="20.000" spending="300"/>
      <Events/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor= { (item) => String(item.id) }
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,

  }
});
