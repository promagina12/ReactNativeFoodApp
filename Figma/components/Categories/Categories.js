import * as React from "react";
import { View, Text, FlatList, Image } from "react-native";
import categoriesData from "../../assets/data/categoriesData";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import colors from "../../assets/colors/colors";
import styles from "./styles";

let customFont = {
  "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
};

export default function Categories() {
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFont);
  };

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
}
