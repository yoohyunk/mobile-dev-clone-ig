import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const IgProfile = () => {
  const posts = Array(20).fill('https://www.sait.ca/assets/image/banners/image-banner-photo-600x600/br-students-walking-outside-heritage-hall-600x600.jpg');

const handleAlertPress = () => {
  Alert.alert('Alert button pressed');
};


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>UserId</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🔔</Text>
          <Text style={styles.icon}>⋯</Text>
        </View>
      </View>

      <View style={styles.profileInfo}>
      <LinearGradient colors={['#F58529', '#FEDA77', '#DD2A7B', '#8134AF', '#515BD4']} style={styles.profileImageContainer}>
        <Image source={{ uri: 'https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/348225305_912396083308963_7923757476045033558_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=d1V49_2UfR0Q7kNvgGJJAKW&_nc_zt=23&_nc_ht=scontent.fyyc3-1.fna&_nc_gid=AvkkY5QvScJJEdUuEOUHR1g&oh=00_AYAGmENNc8-0Gos9iUWhguPGbQcaOlZit-RSvg0SozEDBQ&oe=67A71E5C' }} style={styles.profileImage} />
        </LinearGradient>
        <View>
          <Text style={styles.profileName}>Sait</Text>
          <View style={styles.stats}>
            <Text style={styles.stat}><Text style={styles.bold}>20</Text> posts</Text>
            <Text style={styles.stat}><Text style={styles.bold}>20</Text> followers</Text>
            <Text style={styles.stat}><Text style={styles.bold}>20</Text> following</Text>
          </View>
          <Text style={styles.welcomeText}>Welcome to Sait Instagram page</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Follow</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Message</Text></TouchableOpacity>
      </View>

      <View style={styles.navIcons}>
        <Text style={[styles.icon, styles.activeTab]}>#</Text>
        <Text style={styles.icon}>▶️</Text>
        <Text style={styles.icon}>👤</Text>
      </View>

      <View style={styles.postsGrid}>
        {posts.map((post, index) => (
          <Image key={index} source={{ uri: post }} style={styles.postImage} />
        ))}
      </View>

      <View style={styles.bottomNav}>
        <Text style={[styles.icon, styles.activeTab]}>🏠</Text>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.icon}>➕</Text>
        <Text style={styles.icon}>▶️</Text>
        <Text style={styles.icon}>👤</Text>
      </View>
      
      <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
        <Text style={styles.alertButtonText}>Alert Button</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    fontSize: 24,
    marginLeft: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    borderWidth: 3,
    borderRadius: 50,
    padding: 3,
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  stats: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  stat: {
    color: 'white',
    marginRight: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  welcomeText: {
    color: 'white',
    marginTop: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  navIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postImage: {
    width: '32%',
    height: 100,
    marginBottom: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: 'black',
    marginTop: 20,
  },
  activeTab: {
    color: 'white', 
    textDecorationLine: 'none',  
    borderBottomWidth: 3,        
    borderBottomColor: 'white',  
    paddingBottom: 1,            
  },
  alertButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default IgProfile;