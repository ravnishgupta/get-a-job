
import './App.css';
import Header from './components/Header';
import Home  from './pages/Home';
import Dashboard  from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Login from './pages/Login';
import Signup from './pages/Signup';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Setup authorization header for all calls to server.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
      <Header />
        
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
             <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Routes>
      
      
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
