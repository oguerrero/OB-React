import './App.css'
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF'
import TaskListComponent from './components/container/task_list'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import ComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'
import GreetingStyled from './components/pure/greetingStyled'
import Father from './components/container/father'
import OptionalRender from './components/pure/optionalRender'
import LoginFormik from './components/pure/forms/loginFormik'
import RegisterFormik from './components/pure/forms/registerFormik'

function App() {
    return (
        <div className='App'>
            {/* <header className='App-header'> */}
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            {/* Componente Greeting.jsx*/}
            {/* <Greeting name='Oscar' /> */}
            {/* <GreetingF name={'Oscar'} /> */}
            {/* Ejemplos de uso de hooks */}
            {/* <Ejemplo1 /> */}
            {/* <Ejemplo2 /> */}
            {/* <ComponenteConContexto /> */}
            {/* <Ejemplo4 nombre='Oscar'>
                {/* Todo lo que hay aqui dentro es tratado como props.children 
                    <h3>Contenido del props.children</h3>
                </Ejemplo4> */}
            {/* <GreetingStyled name='Oscar' /> */}
            {/*    </header> */}
            {/* <Father /> */}

            {/* Ejemplos de renderizado condicional */}
            {/* <OptionalRender /> */}

            {/* Ejemplos de Formik */}
            {/* <LoginFormik /> */}
            <RegisterFormik />

            {/* PROYECTO FINAL */}
            {/* <TaskListComponent />   */}
        </div>
    )
}

export default App
