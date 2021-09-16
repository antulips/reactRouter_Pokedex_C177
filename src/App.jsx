import React, { Component } from "react";
import {
  BrowserRouter as MyRouter,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import About from "./components/About";

//EL SCREEN SOLO ES UN COMPONENTE QUE RECIBE EL ROUTER
//si queremos mandarle props propias, no las por defecto, lo pasamos como función flecha. La alternativa sería poner como children al componente y ponerle estas propiedades como atributo.
const HomeScreen = (props) => {
  console.log(props);
  return (
    <Home
      location={props.location}
      history={props.history}
      match={props.match}
    />
  );
};

//OTRA ALTERNATIVA>envía todas las propiedas (las por defecto y las propias) con router
//LE DIGO QUE SEA SOPORTABLE POR ROUTER
//con esto le doy soporte para que tenga las props del router y las propias
//export default withRouter(NOMBREDELCOMPONENTE);

export default class App extends Component {
  render() {
    return (
      <MyRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pokemon/:pokemonId" component={Pokemon} />
        </Switch>
        {/* <Pokemon /> Esta ruta no va funcionar ya que recibe un parametro como props */}
      </MyRouter>

      /* AREA DE TRABAJO
            En este punto deberan utilizar react router dom
            Arriba tenemos los componentes a utilizar, los mismos deben estar envueltos
            en los componentes de react router dom. Si no se acuerdan como era la estructura,
            miren el material previo o la documentacion de react router dom
            */
    );
  }
}
