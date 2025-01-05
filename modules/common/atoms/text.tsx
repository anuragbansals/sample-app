import {Text, TextStyle} from 'react-native';

interface IProps {
  children: string;
  style?: TextStyle;
}

const CustomText = (props: IProps) => {
  const {children, style} = props;
  return <Text style={style}>{children}</Text>;
};

export default CustomText;
