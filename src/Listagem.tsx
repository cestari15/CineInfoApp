import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Footer from "./screens/Footer";
import FooterAdm from "./screens/FooterAdm";
import { useNavigation } from "@react-navigation/native";



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
                console.log(response)
                console.log(filmes);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const navigation = useNavigation(); 

    const renderItem = ({ item }: { item: Filme }) => (
        <View style={styles.item} key={item.id}>
            <TouchableOpacity><Image style={styles.image} source={require('./assets/images/filme2.jpg')} /></TouchableOpacity>
            <Text style={styles.textNome}>{item.titulo}</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('EditarFilmes',{item})}>
                        <Image source={require('./assets/images/lapis.png')} style={styles.editarImage}/>
                    </TouchableOpacity>

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


           

            
            </ScrollView>


            <FooterAdm />
        </View>

    );
};

const styles = StyleSheet.create({
    editarImage:{
        height:95,
        width:120
    },
    image: {
        height: 100,
        width: 201,
        marginTop: -20,
        borderRadius: 10
    },
    footer: {},
    footerIcon: {},
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    hIcon: {},
    especialides: {},
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        color: 'white',
        height: 400,
        width: 200,
        alignItems: 'center'
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