import React, { useState, useEffect  } from 'react';
import { View, FlatList, ActivityIndicator, Pressable,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../../components/home/ListComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../services/fetch_news';

const HomeScreenUI = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  const fetchData = async () => {
    try {
       dispatch(fetchProducts());
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostPress = (item) => {
    navigation.navigate('Details', { item });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handlePostPress(item)}>
      <ListItem item={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  listItem: {
    padding: 40,
  }, 
});

export default HomeScreenUI;
