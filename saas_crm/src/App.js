import {React, useState} from 'react';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Button,
  theme,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertDialog,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';

function App() {
  const [loginInputs, setLoginInputs] = useState();
  const [isVisible, setIsVisible] = useState(false);


  const handleInputchange = (e) => {
    setLoginInputs((infos) => ({...infos, [e.target.name] : e.target.value}))
  }

  const handleLogin = async () => {
    let login = await axios.post("http://localhost:3000/auth/login", {email : loginInputs.email, password: loginInputs.password}, { withCredentials: true });

    console.log(login);
  }

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" w="100%"/>
      <FormControl display="flex" flexDir="column" alignItems="center" >
        <FormLabel>Email</FormLabel>
        <Input onChange={handleInputchange} variant='flushed' placeholder='Entrez votre email...' type='email' name='email' w="200px"/>
        <FormLabel>Mot de passe</FormLabel>
        <Input onChange={handleInputchange} variant='flushed' placeholder='Entrez votre mot de passe...' type='password' name='password' w="200px"/>
        <Button variant='ghost' size="sm" onClick={handleLogin}>
          Se connecter
        </Button>
      </FormControl>

      {/* {isVisible ? 
        <Alert>

        </Alert>

        :

        <Alert></Alert>
      } */}
    </ChakraProvider>
  );
}

export default App;
