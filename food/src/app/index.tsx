import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants"

import { Header } from "../components/header";
import { Banner } from "../components/banner"
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        
        <Header />

        <Banner />

        <Search />
        
      </View>

      <Section 
        name="Comidas em alta"
        label="Veja mais"
        action={ () => console.log("Clicou no botão Comidas em alta") }
        size="text-2xl"
      />

      <TrendingFoods />

      <Section 
        name="Famosos no AppDelivery"
        label="Veja todos"
        action={ () => console.log("Clicou no botão Famosos no AppDelivery") }
        size="text-xl"
      />

      <Restaurants />

      <Section 
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("Clicou no botão Restaurantes") }
        size="text-xl"
      />

      <RestaurantVerticalList />

    </ScrollView>
  );
}
