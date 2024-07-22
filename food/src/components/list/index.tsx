import { View, Text } from "react-native"
import { useState, useEffect } from "react"
import { RestaurantItem } from "./item"

export interface RestaurantsProps {
    id: string,
    name: string,
    image: string,
}

export function RestaurantVerticalList() {
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
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map( item => (
                <RestaurantItem item={item} key={item.id} />
            ))}
        </View>
    );
}