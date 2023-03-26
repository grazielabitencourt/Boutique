import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductList from './components/ProductList/Index';

function App(): JSX.Element {
  const products = [
    {
      id: 1,
      name: 'Calça xadrez',
      description: 'Nesse outono o marrom está em alta, aproveite e confira ',
      imageUrl: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80',
    },
    {
      id: 2,
      name: 'Bota carmurça Bege',
      description: 'Bota cano curto onde vai arrasar usando no outono',
      imageUrl: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 3,
      name: 'Jaqueta couro master',
      description: 'Jaqueta couro preta forrada para aquecer seu inverno',
      imageUrl: 'https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    },
    {
      id: 4,
      name: 'Kit Marrom Lançamento',
      description: 'Nesse outono o marrom está em alta, aproveite e confira ',
      imageUrl: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80',
    },
  ];
  return (
    <div className="App">
      <Header />
      <h1>Boutique Dona Bitencourt </h1>
      <p>Vista-se com estilo e elegância. Descubra nossa coleção única e exclusiva de roupas e acessórios que vão fazer você se destacar em qualquer ocasião</p>
      <ProductList products={products} />
    </div>
  );
}

export default App;
