import React from "react"
import { ScrollView, View, VStack } from "native-base"
import { Utils } from "../Utils";
import { Variables } from "../Variables";
import { useHeaderHeight } from '@react-navigation/elements';

type Props = {
  title?: string,
  children?: JSX.Element | JSX.Element[]
}

const width = Utils.getStyle(Variables.webWidth, "100%");
const justifyContent = Utils.getStyle("center", "flex-start");

const ScrollableCenteredContainer: React.FC<Props> = ({ children }: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        flex={1}
        alignItems="center"
        justifyContent={justifyContent}
      >
        <VStack
          top={headerHeight}
          space={4}
          width={width}
          alignItems="center"
          flex={1}
        >
          {children}
        </VStack>
      </View>
    </ScrollView>
  );
}

export default ScrollableCenteredContainer;