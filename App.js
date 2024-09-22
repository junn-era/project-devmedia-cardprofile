import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Img1 from './assets/handbw.jpg';
import Img2 from './assets/img-profile.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imgHand} source={Img1} alt='Foto de uma mão'/>
      <View style={styles.cardProfile}>
        <Image style={styles.imgProfile} source={Img2}/>
        <Text style={styles.title}>Francisco de Oliveira</Text>
        <Text style={styles.bio}>
          Contumaz aprendiz, atraído pela área de TI, desde sempre. Graduado em Música pela Universidade Federal
          de Goiás. Entusiasta em Fotografia. Atualmente cursando ADS pela Faculdade São Francisco de Assis.
          Certificados em TI relacionados à: CLOUD, AWS, FRONT-END, CSS, HTML, JAVASCRIPT, REACT, PHP, PYTHON, BD,
          SQL SERVER.
          Estou em busca de oportunidades em Desenvolvimento Front-End.
          Tenho experiência com suporte em TI.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
    marginHorizontal: 15,
  },
  imgHand: {
    width: 200,
    height: 200,
    transform: [
      // {rotate: '180deg'},
      {scaleY: -1},
    ],
  },
  imgProfile: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
  }
});



