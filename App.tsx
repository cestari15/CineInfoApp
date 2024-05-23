import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CadastroFilmes from './src/CadastroFilme';
import ListagemFilmes from './src/Listagem';
import EditarFilmes from './src/EditarFilmes';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name='Cadastro' component={CadastroFilmes} 
        options={{ headerShown: false }} />
       
       <Stack.Screen name='listagem' component={ListagemFilmes}
         options={{ headerShown: false }} />

           
       <Stack.Screen name='EditarFilmes' component={EditarFilmes}
         options={{ headerShown: false }} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

export default App;