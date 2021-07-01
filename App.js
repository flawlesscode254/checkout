import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Shoe from './assets/shoe.png'

export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: "#d9baf5"
    }}>
      <StatusBar style={{
        backgroundColor: "#d9baf5"
      }} />
      <View style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 40
      }}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
        <Ionicons name="heart-outline" size={24} color="#FFF" />
      </View>
      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
      }}>
        <Image style={{
          width: 200,
          height: 200,
          resizeMode: "contain"
        }} source={Shoe} />
      </View>

      <View style={{
        backgroundColor: "#d9baf5"
      }}>
        <View style={{
          backgroundColor: "#ebe8ed",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          marginTop: 50
        }}>
          <View style={{
            marginHorizontal: 20,
            marginTop: 20
          }}>
            <Text style={{
              fontWeight: "bold",
              fontSize: 15,
              letterSpacing: 3
            }}>Adidas</Text>
            <Text style={{
              color: "gray",
              letterSpacing: 3
            }}>New Papua</Text>
          </View>
          <View style={{
             marginHorizontal: 20,
             marginTop: 20
          }}>
            <Text style={{
              color: "gray"
            }}>Size</Text>
          </View>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 20
          }}>

            <View style={{
              backgroundColor: "orange",
              width: 50,
              height: 50,
              borderRadius: 13,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                color: "#FFF",
                fontWeight: "bold"
              }}>SZ 6</Text>
            </View>

            <View style={{
              backgroundColor: "#FFF",
              width: 50,
              height: 50,
              borderRadius: 13,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                color: "black",
                fontWeight: "bold"
              }}>SZ 6</Text>
            </View>

            <View style={{
              backgroundColor: "#FFF",
              width: 50,
              height: 50,
              borderRadius: 13,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                color: "black",
                fontWeight: "bold"
              }}>SZ 6</Text>
            </View>

            <View style={{
              backgroundColor: "#FFF",
              width: 50,
              height: 50,
              borderRadius: 13,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                color: "black",
                fontWeight: "bold"
              }}>SZ 6</Text>
            </View>

            <View style={{
              backgroundColor: "#FFF",
              width: 50,
              height: 50,
              borderRadius: 13,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                color: "black",
                fontWeight: "bold"
              }}>SZ 6</Text>
            </View>

          </View>

              <View style={{
                marginTop: 20,
                marginHorizontal: 20
              }}>
                <Text style={{
                  color: "gray"
                }}>Color</Text>
              </View>

              <View style={{
                marginTop: 20,
                marginHorizontal: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "70%"
              }}>
                <View style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: "red"
                }}></View>
                <View style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: "yellow"
                }}></View>
                <View style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: "blue"
                }}></View>
                <View style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: "black"
                }}></View>
              </View>

                <View style={{
                  marginHorizontal: 20,
                  marginTop: 40,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "orange",
                  padding: 10,
                  borderRadius: 15,
                  marginBottom: 50
                }}>
                  <Text style={{
                    fontWeight: "bold",
                    color: "#FFF",
                    letterSpacing: 3
                  }}>$250</Text>
                  <View style={{
                    backgroundColor: "#FFF",
                    borderRadius: 13,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    paddingVertical: 5
                  }}>
                    <Ionicons style={{
                      marginRight: 10
                    }} name="cart-outline" size={20} color="black" />
                    <Text>Checkout</Text>
                  </View>
                </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
