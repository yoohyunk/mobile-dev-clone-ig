import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="chevron-back-outline" size={30} color="white" />
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            UserId
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="notifications-outline" size={30} color="white" />
          <Feather name="more-horizontal" size={30} color="white" />
        </View>
      </View>
      <View
        style={{
          gap: 15,
          backgroundColor: "black",
          width: "100%",
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: 15,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
            }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
          />
          <View style={{ flexDirection: "column", gap: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>
              Sait
            </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
                >
                  20
                </Text>
                <Text style={{ color: "white" }}>posts</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
                >
                  20
                </Text>
                <Text style={{ color: "white" }}>followers</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "white" }}
                >
                  20
                </Text>
                <Text style={{ color: "white" }}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ color: "white" }}>Welcome to Sait Instagram page</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View
            style={{
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              flex: 1,
              height: 33, // Set height here
              alignItems: "center", // Center horizontally
              justifyContent: "center", // Center vertically
            }}
          >
            <Text style={{ color: "white" }}>Follow</Text>
          </View>

          <View
            style={{
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
              flex: 1,
              height: 33, // Set height here
              alignItems: "center", // Center horizontally
              justifyContent: "center", // Center vertically
            }}
          >
            <Text style={{ color: "white" }}>Message</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <Ionicons name="grid-outline" size={30} color="white" />
          <FontAwesomeIcon name="play-circle" size={30} color="white" />
          <FontAwesomeIcon name="user-o" size={30} color="white" />
        </View>
      </View>
      <View style={styles.imageGrid}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IQ0E8QBrwViT6tBHS5ON7yK3wjZal2-EgQ&s",
          }}
          style={styles.imageCell}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
          }}
          style={styles.imageCell}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
          }}
          style={styles.imageCell}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
          }}
          style={styles.imageCell}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
          }}
          style={styles.imageCell}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyS5J0wzkCxrKUYMZYnxfezHhAxetFjuDcg&s",
          }}
          style={styles.imageCell}
        />
      </View>

      <View style={styles.footer}>
        <Ionicons name="home-outline" size={30} color="white" />
        <Ionicons name="search-outline" size={30} color="white" />
        <Ionicons name="add-circle-outline" size={30} color="white" />
        <FontAwesomeIcon name="play-circle" size={30} color="white" />
        <Feather name="user" size={30} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    // paddingBottom: 30,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "black",
  },
  footer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderTopWidth: 0.5,
    borderColor: "black",
  },
  imageGrid: {
    flexGrow: 1,
    backgroundColor: "black",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0.3%",
  },
  imageCell: {
    width: "33%",
    height: "100%",
    aspectRatio: 0.66,
    resizeMode: "cover",
  },
});
