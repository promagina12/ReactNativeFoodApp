import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },

  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },

  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "50%",
  },

  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  priceText: {
    color: colors.price,
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
  },

  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoItemWrapper: {
    marginBottom: 20,
  },

  infoItemTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: colors.textLight,
  },

  infoItemText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: colors.textDark,
  },

  infoLeftWrapper: {
    paddingLeft: 20,
  },

  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },

  ingredientsWrapper: {
    marginTop: 40,
  },

  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    color: colors.textDark,
  },

  ingredientsListWrapper: {
    paddingVertical: 20,
  },

  ingredientsItemWrapper: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  ingredientsImage: {
    resizeMode: "contain",
  },

  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  orderText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    marginRight: 10,
  },
});

export default styles;
