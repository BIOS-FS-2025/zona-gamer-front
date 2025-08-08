import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function Login() {

  const { login, isLoading, setIsLoading, isAuthenticated } = useContext(AuthContext)

  // // Spread operator con objetos
  // const frontEndStack = ['React', 'Next.js', 'Angular']
  // const backEndStack = ['Node.js', 'express', 'Django']
  // const fullStack = [...frontEndStack, ...backEndStack]
  
  // const user = {
  //   name: 'Miguel',
  //   age: 20,
  //   email: 'miguel@gmail.com',
  //   password: '123456'
  // }

  // const user2 = {
  //   ...user,
  //   name: 'Miguel Angel' // solo se modifica el nombre, el resto de propiedades se mantienen
  // }

  // console.log('Valor de user2', user2);

  // console.log('Valor de user', user);

  // console.log(fullStack);


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData, // Copia del estado actual de formData
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (formData.email.length === 0) {
        setError('Por favor, ingresa un email')
        return;
      }

      if (formData.password.length === 0) {
        setError('Por favor, ingresa una contraseña')
        return;
      }

      setIsLoading(true)
      const email = formData.email.length > 0 ? formData.email : 'f';
      const password = formData.password.length > 0 ? formData.password : '0';
      const url = `http://localhost:5000/login?email=${email}&password=${password}`

        const response = await axios.get(
          // ? es para agregar parametros a la url y se conoce cómo query params
          url
        );

      if (response.data.length > 0) {
        const user = response.data[0]
        login({user, token: 'fake-jwt-token'})
      } else {
        setError('Usuario no encontrado')
      }
    } catch (error) {
      console.error(error)
      setError('No pudimos iniciar sesión, por favor intenta nuevamente')
    } finally {
      setIsLoading(false)
    }
  };

    if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-primary animate-fadeInUp">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-primary text-white mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-lg text-text-muted font-secondary">Bienvenido de nuevo</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error ? <p className="text-red-500 text-center mb-4">{error}</p> : null}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-text-muted font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                className="w-full p-4 bg-gray-900/50 font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 placeholder-gray-500 rounded-lg"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-text-muted font-semibold mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={handleChange}
                className="w-full p-4 bg-gray-900/50 font-medium transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 placeholder-gray-500 rounded-lg"
              />
            </div>
            {isLoading ? <LoadingSpinner /> : <button type="submit" className="w-full bg-gradient-to-r from-primary to-red-500 text-white px-8 py-4 rounded-lg text-bold uppercase tracking-wider text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-3 group shadow-lg shadow-primary/30">
              <span>Iniciar Sesión</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">🚀</span>
            </button>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
