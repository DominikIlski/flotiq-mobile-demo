import React from 'react';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../helpers/constants/colors';
import styles from './styles';

const CustomBtn = (props) => (
    <Button
        title={props.title}
        onPress={props.onPressBtn}
        ViewComponent={props.withGradient && LinearGradient}
        linearGradientProps={props.withGradient && {
            colors: [
                Colors.gradient.primary,
                Colors.gradient.secondary,
            ],
            useAngle: true,
            angle: 50,
            angleCenter: { x: 0.7, y: 1 },
        }}
        buttonStyle={{ ...styles.btn, ...props.buttonStyle }}
        titleStyle={{ ...styles.title, ...props.titleStyle }}
    />
);

export default CustomBtn;