import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import colors from "../../assets/colors/colors";
import styles from "./styles";
import popularData from "../../assets/data/popularData";
import Details from "../Details/Details";
import { useNavigation } from "@react-navigation/native";

MaterialCommunityIcons.loadFont();

let customFont = {
  "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
};

export default function Popular() {
  const navigation = useNavigation();
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFont);
  };

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  return (
    <View>
      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("Details", {
                item: item,
            })}
          >
            <View
              style={[
                styles.popularCardWrapper,
                {
                  marginTop: item.id == 1 ? 10 : 20,
                },
              ]}
            >
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitlesTiles}>{item.title}</Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight {item.weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularCardButton}>
                  <View style={styles.addPizzaButton}>
                    <Feather name="plus" size={10} color={colors.textDark} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons
                      name="star"
                      size={10}
                      color={colors.textDark}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.popularCardRight}>
                <Image style={styles.popularCardImage} source={item.image} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
