import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_103_2705} />
      <View style={styles.View_103_2706}>
        <View style={styles.View_103_2707}>
          <Text style={styles.Text_103_2707}>Enter Lease ID</Text>
        </View>
        <View style={styles.View_103_2708}>
          <Text style={styles.Text_103_2708}>Enter Zip Code</Text>
        </View>
        <View style={styles.View_103_2709}>
          <View style={styles.View_103_2710}>
            <View style={styles.View_103_2711}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d3/524f/4e1ecb5a444dd4bc6ba5079a89c10c4a"
                }}
                style={styles.ImageBackground_103_2712}
              />
              <View style={styles.View_103_2713}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/763f/c91c/27dcea4395d8fd57f072dd543bc22fce"
                  }}
                  style={styles.ImageBackground_103_2714}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2a/8b8f/a9873507e2161cfa3c4f1f8655d00dd6"
                  }}
                  style={styles.ImageBackground_103_2715}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d5b/18b8/cbc42233f66a0e72d28502f2027c9e44"
                  }}
                  style={styles.ImageBackground_103_2716}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d3/8ba2/0360b2395e5643a066b767f60ac50368"
            }}
            style={styles.ImageBackground_103_2719}
          />
        </View>
        <View style={styles.View_103_2720}>
          <View style={styles.View_I103_2720_306_1384} />
          <View style={styles.View_I103_2720_306_1385}>
            <Text style={styles.Text_I103_2720_306_1385}>Next</Text>
          </View>
        </View>
        <View style={styles.View_103_2721}>
          <View style={styles.View_103_2722} />
          <View style={styles.View_103_2723}>
            <View style={styles.View_I103_2723_396_9708} />
          </View>
          <View style={styles.View_103_2724}>
            <View style={styles.View_I103_2724_396_9708} />
          </View>
          <View style={styles.View_103_2725}>
            <View style={styles.View_I103_2725_396_9708} />
          </View>
          <View style={styles.View_103_2726}>
            <View style={styles.View_I103_2726_396_9708} />
          </View>
          <View style={styles.View_103_2727}>
            <View style={styles.View_I103_2727_396_9708} />
          </View>
          <View style={styles.View_103_2728}>
            <View style={styles.View_I103_2728_396_9708} />
          </View>
          <View style={styles.View_103_2729}>
            <View style={styles.View_I103_2729_396_9708} />
          </View>
        </View>
        <View style={styles.View_103_2730}>
          <View style={styles.View_103_2731}>
            <View style={styles.View_I103_2731_396_9708} />
          </View>
          <View style={styles.View_103_2732}>
            <View style={styles.View_I103_2732_396_9708} />
          </View>
          <View style={styles.View_103_2733}>
            <View style={styles.View_I103_2733_396_9708} />
          </View>
          <View style={styles.View_103_2734}>
            <View style={styles.View_I103_2734_396_9708} />
          </View>
          <View style={styles.View_103_2735}>
            <View style={styles.View_I103_2735_396_9708} />
          </View>
        </View>
        <View style={styles.View_103_2736}>
          <Text style={styles.Text_103_2736}>Lease Information</Text>
        </View>
        <View style={styles.View_103_2737}>
          <View style={styles.View_I103_2737_197_2604}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8c/20d3/5c88b49941f6c5c878dee037d39fcda6"
              }}
              style={styles.ImageBackground_I103_2737_4645_38209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3232/b9a9/760d4aa12a1c1fc5c15b4e023b7d2cae"
              }}
              style={styles.ImageBackground_I103_2737_197_2607}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_103_2738}>
        <View style={styles.View_103_2739} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ad7/fefd/bc2f6f8cfff1f833007ef27a2fa8819f"
          }}
          style={styles.ImageBackground_103_2740}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_103_2741}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("103_2079"))
          }
        >
          <View style={styles.View_I103_2741_353_36}>
            <Text style={styles.Text_I103_2741_353_36}>HELP</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_103_2742}>
        <Text style={styles.Text_103_2742}>23% complete</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("148%") },
  View_103_2705: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(106, 103, 206, 1)"
  },
  View_103_2706: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_103_2707: {
    width: wp("7%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_103_2707: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_2708: {
    width: wp("7%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_103_2708: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_2709: {
    width: wp("14%"),
    height: hp("30%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_103_2710: {
    width: wp("12%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_103_2711: {
    width: wp("12%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_103_2712: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_103_2713: {
    width: wp("9%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_103_2714: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_103_2715: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_103_2716: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%")
  },
  ImageBackground_103_2719: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("2%")
  },
  View_103_2720: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2720_306_1384: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 163, 189, 1)"
  },
  View_I103_2720_306_1385: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I103_2720_306_1385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_103_2721: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%")
  },
  View_103_2722: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(160, 163, 189, 1)"
  },
  View_103_2723: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2723_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2724: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2724_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2725: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2725_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2726: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2726_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2727: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2727_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2728: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2728_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2729: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2729_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2730: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("73%")
  },
  View_103_2731: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2731_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2732: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2732_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2733: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2733_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2734: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2734_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2735: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_2735_396_9708: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_103_2736: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_103_2736: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_2737: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I103_2737_197_2604: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I103_2737_4645_38209: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I103_2737_197_2607: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_103_2738: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_103_2739: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_103_2740: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  TouchableOpacity_103_2741: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("4%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_I103_2741_353_36: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I103_2741_353_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_103_2742: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_103_2742: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
