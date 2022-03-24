import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
  },

  popularTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },

  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  popularTopText: {
    marginLeft: 10,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },

  popularTitlesWrapper: {
    marginTop: 20,
  },

  popularTitlesTiles: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: colors.textDark,
  },

  popularTitlesWeight: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },

  popularCardButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },

  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },

  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },

  rating: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },

  popularCardRight: {
    marginLeft: 40,
  },

  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});

export default styles;
