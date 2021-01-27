import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { LogBox, StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../type';


function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);

    const [isLoading, setIsloading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const fetchData = () => {

        setIsloading(true);
        fetchOrders()
            .then(Response => setOrders(Response.data))
            .catch(() => Alert.alert('houve um erro ao buscar pedidos !!!'))
            .finally(() => setIsloading(false))
    }

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrdersDetails', {
            order
        });
    }

    return (
        <>
            <Header />
            < ScrollView style={styles.container}>
                {isLoading ? (
                    
                        <Text>Buscando Pedidos !!</Text>
                ) : (orders.map(order => (
                    <TouchableWithoutFeedback
                        key={order.id}
                        onPress={() => handleOnPress(order)}>
                        <OrderCard order={order} />
                    </TouchableWithoutFeedback>
                )))}

            </ ScrollView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',

    }
});

export default Orders;