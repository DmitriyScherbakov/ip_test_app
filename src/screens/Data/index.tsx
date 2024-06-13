import GradientBackground from '@Components/GradientBackground';
import Typography from '@Components/Typography';
import {COLORS, SIZES} from '@Constants/style.constants';
import React, {FC, memo, useContext} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {
  //
};
const Market: FC<Props> = () => {

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground>
        <GestureHandlerRootView style={styles.gestureWrapper}>
          {/* <Layout style={styles.layout}> */}
          <Typography style={styles.header} element="h3">
            Data
          </Typography>
          {/* </Layout> */}
        </GestureHandlerRootView>
      </GradientBackground>
    </SafeAreaView>
  );
};

export default memo(Market);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.HeavyMetal,
  },
  gestureWrapper: {flex: 1},
  layout: {
    flexGrow: 1,
    width: SIZES.width,
    paddingTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 25,
    marginVertical: SIZES.spacing * 2.5,
    alignSelf: 'center',
  },
});
