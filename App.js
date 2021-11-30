import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem,timeImg}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >
        <View style={styles.centeredView}>
        
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text style={styles.timeView}> Time: {mensagem}</Text>
                      <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: timeImg,
                      }}
                    />
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Jogador = ({nome,time,link,timeImg}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={time} timeImg={timeImg}/>
      <Text style={styles.paragraph}>{nome}</Text>
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
      </Pressable>
      <View
        style={{
          marginTop:20,
          marginBottom:10,
          borderBottomColor: '#8be9fd',
          borderBottomWidth: 1,
        }}
      />
    </View>
    )
}


const DATA = [
        {
            "id": 1,
            "time": "Los Angeles Lakers",
            "timeImg": "https://logodownload.org/wp-content/uploads/2019/06/la-lakers-logo-0.png",
            "name": "LeBron James",
            "avatar": "https://conteudo.imguol.com.br/c/esporte/84/2021/05/31/lebron-james-do-los-angeles-lakers-1622459867743_v2_3x4.jpg"
        },
        {
            "id": 2,
            "time": "Los Angeles Lakers",
            "timeImg": "https://logodownload.org/wp-content/uploads/2019/06/la-lakers-logo-0.png",
            "name": "Anthony Davis",
            "avatar": "https://jumperbrasil.lance.com.br/wp-content/uploads/2020/10/Anthony-Davis-3.jpg"
        },
        {
            "id": 3,
            "time": "Milwaukee Bucks",
            "timeImg": "https://logodetimes.com/times/milwaukee-bucks/logo-milwaukee-bucks-2048.png",
            "name": "Giannis Antetokounmpo",
            "avatar": "https://oespecialista.com.br/wp-content/uploads/2021/07/Giannis-Antetokounmpo-NBA-e1626883538816.jpg"
        },
        {
            "id": 4,
            "time": "Golden State Warriors",
            "timeImg": "https://logosmarcas.net/wp-content/uploads/2020/07/Golden-State-Warriors-logo.png",
            "name": "Stephen Curry",
            "avatar": "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/04/13/1145457845-stephencurry-13.jpg"
        },
        {
            "id": 5,
            "time": "Brooklyn Nets",
            "timeImg": "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbkn.png",
            "name": "James Harden",
            "avatar": "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5MDE0NjkyOTY5MTI5NDcx/james-harden-nets-suns.jpg"
        },
    ];


//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    
    return(
      
      <Jogador nome={item.name} 
              link={item.avatar}
              time={item.time}
              timeImg={item.timeImg}
      />
    )
  }
  

  return (
    
    <View style={styles.container}>
      <Text style={styles.tituloView}>PLAYERS DA NBA</Text>
      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#650382',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#f8f8f2"
  },
  tinyLogo: {
    marginBottom:10,
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f1c401",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timeView: {
    color:"650382",
    marginBottom: 20
  },
  tituloView: {
    padding:12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white",
    backgroundColor: 'black'
  }
});
