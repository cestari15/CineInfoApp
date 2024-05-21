import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Footer from "./screens/Footer";
import FooterAdm from "./screens/FooterAdm";


interface Filme {
    id: string;
    titulo: string;
    diretor: string;
    genero: string;
    dt_lancamento: string;
    sinopse: string;
    elenco: string;
    classificacao: string;
    plataformas: string;
    duracao: string;
}

const ListagemFilmes: React.FC = () => {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    useEffect(() => {
        ListagemFilmes();
    }, []);

    const ListagemFilmes = async () => {
        try {
            const response = await axios.get('http://10.137.11.214:8000/api/filmes/listagem');
            if (response.status === 200) {
                setFilmes(response.data.data);

                console.log(filmes);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const renderItem = ({ item }: { item: Filme }) => (
        <View style={styles.item} key={item.id}>
            <TouchableOpacity><Image  style={styles.image} source={require('./assets/images/filme2.jpg')}/></TouchableOpacity>   
            <Text style={styles.textNome}>{item.titulo}</Text>
          

        </View>
    );

    return (


        <View style={styles.container}>
            <ScrollView>


                <View>
                    <TouchableOpacity>
                        <Image source={require('./assets/images/logo.png')} style={styles.Logo} />
                    </TouchableOpacity>
                </View>


                <View>

                    <FlatList
                        data={filmes}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                </View>

          
            <View>
                <FlatList
                    data={filmes}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </View>
          
            <View>
                <FlatList
                    data={filmes}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </View>
            </ScrollView>


<FooterAdm/>
        </View>

    );
};

const styles = StyleSheet.create({
    image:{
        height:300,
        width:201,
        marginTop:-20,
        borderRadius:10
    },
    footer: {},
    footerIcon: {},
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    hIcon: {},
    especialides: {},
    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        color: 'white',
        height: 300,
        width:200,
        marginTop: 30,
        alignItems:'center'
    },
    textNome: {
        color: 'white',


    },
    textIngredientes: {
        color: 'white',

    },
    textValor: {
        color: 'white'
    },
    Logo: {
        height: 150,
        width: 300,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default ListagemFilmes;