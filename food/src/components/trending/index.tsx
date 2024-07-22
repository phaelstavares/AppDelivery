import { useState, useEffect } from "react"
import { FlatList } from "react-native"
import { CardHorizontalFood } from "./food"

export interface FoodProps {
    id: string,
    name: string,
    price: number,
    time: string,
    delivery: number,
    rating: number,
    image: string,
    restaurantId: string,
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch ("http://10.0.0.184:3000/foods") /* IPV4 pode mudar quando reiniciar o computador, cheque caso dê algum erro. */
            const data = await response.json()
            setFoods(data);
        }

        getFoods();
    }, [])

    return (
        <FlatList 
            data={foods}
            renderItem={ ({ item }) => <CardHorizontalFood food={item} /> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}