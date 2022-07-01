
import './App.css';
import Header from './components/Header';
import Home  from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Login from './pages/Login';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const client = new ApolloClient({
  link: httpLink,
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
          </Routes>
      
      
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
