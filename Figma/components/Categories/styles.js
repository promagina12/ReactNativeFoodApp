import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },

  categoriesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },

  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  categoryItemWrapper: {
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },

  categoryItemTitle: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 10,
  },

  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },

  categorySelectIcon: {
    alignSelf: "center",
  },
});

export default styles;
