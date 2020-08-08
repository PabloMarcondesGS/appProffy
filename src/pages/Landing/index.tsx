import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';


function Landing() {
    const {navigate} = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0);
    //primeiro parametro função que sera disparada quando itens do segundo parametro forem alterados
    useEffect(() => {
        api.get('connections').then(response =>{
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    function handleNavigateToGiveClassesPage(){
        navigate('Study');
    }

    function handleNavigateToStudyPage(){
        navigate('GiveClasses');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg}  style={styles.banner}/>
        
            <Text style={styles.title}>
                Seja Bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsConteiner}>
                <RectButton 
                onPress={handleNavigateToGiveClassesPage}
                style={[styles.button, styles.buttonPrimary]}>
                    
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
            
                <RectButton  
                onPress={handleNavigateToStudyPage}
                style={[styles.button, styles.buttonSecondary]}>

                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>

    );
}

export default Landing;