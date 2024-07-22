import { FlatList } from "react-native"
import { useEffect, useState } from "react"
import { RestaurantItem } from "./horizontal"

export interface RestaurantsProps {
    id: string,
    name: string,
    image: string,
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch ("http://10.0.0.184:3000/restaurants") /* IPV4 pode mudar quando reiniciar o computador, cheque caso dê algum erro. */
            const data = await response.json()
            setRestaurants(data);
        }
        
        getFoods();
    }, [])

    return (
        <FlatList 
            data={restaurants}
            renderItem={ ({ item }) => <RestaurantItem item={item} /> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}