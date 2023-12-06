import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export function HomeScreen({ navigation }) {
  const [codigoBodega, setCodigoBodega] = useState('');
  const [codigoArticulo, setCodigoArticulo] = useState('');

  return (
    <View>
      <TextInput placeholder="Código bodega" value={codigoBodega} />
      <Button
        title="Escanear bodega"
        onPress={() => navigation.navigate('Escaner', { setCodigo: setCodigoBodega })}
      />
      <TextInput placeholder="Ingrese nombre artículo" />
      <TextInput placeholder="Código artículo" value={codigoArticulo} />
      <Button
        title="Escanear código de artículo"
        onPress={() => navigation.navigate('Escaner', { setCodigo: setCodigoArticulo })}
      />
    </View>
  );
}