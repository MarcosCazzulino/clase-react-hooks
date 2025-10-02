import Producto from "./components/Producto";
import UserCard from "./components/UserCard";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import FilterProducts from "./components/FilterProducts";


function App() {

  // const usuario = {
  //     name: "Miguel Martinez",
  //     age: 21,
  //     email: "miguelmartinez@gmail.com",
  //     phone: "+54 9 2915092832",
  //   };

  return (
    <div>
      <Counter />
      
      <FilterProducts />
      {/* <h2>Tarjeta de Usuario (Propuesta 1)</h2>

      <UserCard
        name="Juan Pérez"
        email="juan@example.com"
        age={30}
        online={true}
      />
      <UserCard
        name="Emma Gómez"
        email="emma@example.com"
        age={21}
        online={false}
      />

      <h2>Lista de Productos (Propuesta 3)</h2>

      <Producto
        name="Teclado mecanico"
        price={40000}
        discount={25}
        category="Tecnología"
      />

      <Producto
        name="Botines de futbol"
        price={40000}
        category="Calzado"
      />

      <Producto
        name="Mochila"
        price={20000}
        discount={10}
        category="Accesorios"
      />
      
      <h2>Perfil de Usuario (Propuesta 5)</h2>
      <UserProfile user={usuario} showEmail={true} showPhone={false} layout="horizontal" />
      <UserProfile user={usuario} showEmail={true} showPhone={true} layout="vertical" /> */}

    </div>
    
  );
}

export default App