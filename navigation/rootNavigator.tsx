import Pathnames from '../constants/pathname';
import ProductScreen from '../modules/product/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../modules/profile/screens';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Pathnames.productListScreen}
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name={Pathnames.profileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
