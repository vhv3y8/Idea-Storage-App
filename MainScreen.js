import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    Dimensions,
    FlatList,
} from "react-native";
import AddScreen from "./AddScreen";

const { width, height } = Dimensions.get("window");

export default class MainScreen extends React.Component {

    

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                    <Idea />
                <Text>this is Test</Text>

                <FlatList

                />

                <TouchableOpacity
                    style={styles.circleIcon}
                    onPress={() => {navigation.push('add', { title: "hi", body: "body"})}}
                >
                    <View>
                        <Image
                            style={styles.iconImg}
                            source={require('./assets/img/add-idea-icon.png')}
                        />
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

class Idea extends React.Component {
    render() {
        return ( // #F4F8FA
            <View style={{backgroundColor: "white", borderWidth: 1, borderColor: "#cccccc", width: 350, height: 100, borderRadius: 30, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <View style={{width: '65%', alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <Text style={{fontSize: 16.5, fontWeight: "bold", width: '80%', marginBottom: '2%'}}>아이디어 기록 앱 만들기</Text>
                    <Text style={{fontSize: 10, width: '80%'}}>이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다.</Text>
                </View>

                <View style={{width: '30%', borderLeftColor: '#bcbcbc', borderLeftWidth: 1, height: 80, alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                />
                <Text style={{fontSize: 10, marginTop: 3}}>React Native</Text>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        padding: 50,
        backgroundColor: "#e3f2f2", // #FFFCE9 #e2f3fd
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circleIcon: {
        position: "absolute",
        bottom: 30,
        right: 30,
        width: 90,
        height: 90,
        backgroundColor: "#F9F871", // #FFEE23
        borderRadius: 45,
        borderColor: "#F9F871",
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    },
    iconImg: {
        width: 50,
        height: 50
    }
})