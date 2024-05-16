import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icons from "./screens/Icons";



function CadastroFilmes(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");


    function login() {
        const dados = {
            email: email,
            password: password
        }
        console.log(dados);
    }


    return (


        <View style={styles.container}>

            <Image source={require('./assets/images/logo.png')} style={styles.Logo} />

            <ScrollView style={styles.Login}>



             


                <Text style={styles.Text1}>--------------- Cadastrar Stream ----------------</Text>


                <Text>Título</Text>
                <TextInput style={styles.input} placeholder="Digite aqui o Título" placeholderTextColor="#D94F04"
                    onChangeText={(textPassword) => SetPassword(textPassword)}
                />

                <Text>Diretor</Text>
                <TextInput style={styles.input} placeholder="Digite aqui o Diretor do Stream" placeholderTextColor="#D94F04"
                    onChangeText={(textPassword) => SetPassword(textPassword)}
                />

                <Text>Gênero</Text>
                <TextInput style={styles.input} placeholder="Digite aqui o Gênero do Stream" placeholderTextColor="#D94F04"
                    onChangeText={(textPassword) => SetPassword(textPassword)}
                />

                <Text>Data de Lançamento</Text>
                <TextInput style={styles.input} placeholder="Digite aqui a Data de Lançamento do Stream" placeholderTextColor="#D94F04"
                    onChangeText={(textPassword) => SetPassword(textPassword)} keyboardType=""
                />
                <Text >Email</Text>
                <TextInput style={styles.input} placeholder="Digite aqui o seu email" placeholderTextColor="#D94F04"
                    onChangeText={(textEmail) => setEmail(textEmail)}
                />

                <Text>Senha</Text>
                <TextInput style={styles.input} placeholder="Digite aqui sua senha" placeholderTextColor="#D94F04"
                    onChangeText={(textPassword) => SetPassword(textPassword)}
                />







                <TouchableOpacity>
                <Text style={styles.Text}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.button}
                    onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>




            </ScrollView>
        </View>





    );
}


const styles = StyleSheet.create({
    Login: {
        marginTop: 30
    },
    Text1: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 15
    },
    Text: {

        marginTop: -11
    },




    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },


    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D94F04',
        color: 'black',
        width: 360,
    },
    button: {
        backgroundColor: '#D94F04',
        height: 60,
        borderRadius: 20,
        width: 350,
        fontSize: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    buttonText: {
        fontSize: 23,
        width: 90,
        color: '#FFF',
        marginLeft: 148,
        marginTop: 13
    },
    forgotPassword: {
        color: '#D94F04',
        textAlign: 'center',
        fontSize: 10,

    },
    Icons: {
        marginTop: 20
    },
    Text2: {
        color: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Logo: {
        height: 150,
        width: 300,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',


    }
})
export default CadastroFilmes;