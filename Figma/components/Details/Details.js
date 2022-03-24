import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import styles from "./styles";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../../assets/colors/colors";

export default function Details({ route, navigation }) {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientsItemWrapper,
          {
            marginLeft: item.id === "1" ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>

      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => alert('Your order has been placed!!')}>
            <View style={styles.orderWrapper}>
                <Text style={styles.orderText}>Place an order</Text>
                <Feather name="chevron-right" size={18} color={colors.black} />
            </View>
      </TouchableOpacity>
    </View>
  );
}
