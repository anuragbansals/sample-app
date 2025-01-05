import {Image, StyleSheet, View} from 'react-native';
import CustomText from '../../common/atoms/text';

const ProductCard = ({
  product,
  viewMode,
}: {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
  };
  viewMode: string;
}) => (
  <View
    style={[
      styles.card,
      viewMode === 'grid' ? styles.gridCard : styles.listCard,
    ]}>
    <Image source={{uri: product?.images[0]}} style={styles.image} />
    <View style={styles.info}>
      <CustomText style={styles.name}>{product.title}</CustomText>
      <CustomText style={styles.price}>{product.price}</CustomText>
      {viewMode === 'list' && (
        <CustomText style={styles.description}>
          {product.description}
        </CustomText>
      )}
    </View>
  </View>
);

export default ProductCard;

const styles = StyleSheet.create({
  card: {margin: 10, padding: 10, borderWidth: 1, borderRadius: 5},
  gridCard: {flex: 1},
  listCard: {flexDirection: 'row'},
  image: {width: 100, height: 100, marginRight: 10},
  info: {flex: 1},
  name: {fontWeight: 'bold'},
  price: {color: 'green'},
  description: {color: 'gray'},
});
