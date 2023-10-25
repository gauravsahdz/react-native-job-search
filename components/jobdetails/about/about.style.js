import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headText: {
    color: COLORS.primary,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    color: COLORS.gray,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
