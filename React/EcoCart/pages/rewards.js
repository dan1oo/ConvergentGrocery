import { StyleSheet } from "react-native"
const rewards = () => {
    const [points, setPoints] = useState({
        'Store A': 250,
        'Store B': 100,
        'Store C': 500,
    })
    
    const renderProgressBar = (store, currentPoints) => {
    const maxPoints = 1000; // assuming the maximum points for each store is 1000
    const progress = currentPoints / maxPoints;
    return (
        <View style={{ marginVertical: 10 }}>
        <Text>{store}</Text>
        <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={progress}
        />
        <Text>{`${currentPoints}/${maxPoints} points`}</Text>
        </View>
    );
    };

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        My Rewards
        </Text>
        {Object.entries(points).map(([store, currentPoints]) =>
        renderProgressBar(store, currentPoints),
        )}
    </View>
    );
}

const styles = StyleSheet.create(){

}

export default rewards