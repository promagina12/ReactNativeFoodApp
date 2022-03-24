import * as React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import color from "../../assets/colors/colors";
import styles from "./styles";
import categoriesData from "../../assets/data/categoriesData";
import * as Font from "expo-font";
import colors from "../../assets/colors/colors";
import Popular from "../Popular/Popular";
import Categories from "../Categories/Categories";

Feather.loadFont();

let customFont = {
  "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
};

export default function Home() {
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFont);
  };

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        <View>
          <Categories />
        </View>

        <View>
          <Popular />
        </View>
      </ScrollView>
    </View>
  );
}
