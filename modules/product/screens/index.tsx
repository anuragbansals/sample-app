import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../organisms/productCard';
import {getProducts} from '../../../redux/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';

const ProductScreen = () => {
  const [viewMode, setViewMode] = useState('grid');
  const dispatch = useDispatch<AppDispatch>();
  const {products, loading, error} = useSelector(
    (state: RootState) => state.products,
  );
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  if (loading) {
    return <ActivityIndicator style={styles.loading} size={'large'} />;
  }

  return (
    <View style={styles.container}>
      <Button
        title={`Switch to ${viewMode === 'grid' ? 'List' : 'Grid'} View`}
        onPress={toggleViewMode}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        key={viewMode === 'grid' ? 2 : 1} // Ensures layout re-renders properly
        numColumns={viewMode === 'grid' ? 2 : 1}
        renderItem={({item}) => (
          <ProductCard product={item} viewMode={viewMode} />
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  loading: {
    marginTop: 100,
  },
});
