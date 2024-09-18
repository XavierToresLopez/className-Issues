import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View, Text, TextInput } from 'react-native';

import './global.css';

// Hello, this reproduction covers two issues I've noticed with Nativewind v4.

// The first one covers an issue where LinearGradient ( and some other libraries as well )
// don't recognize className. For example, if you comment out the "style" line and uncomment
// the "className" line, you'll see that the exact same styling options do not work and the
// LinearGradient disappears from the screen.

// The second one covers an issue where TextInput ( and some other core components as well )
// fail to recognize some of the custom classNames. For example, TextInput correctly recognizes
// className, but does not correctly recognize "placeholderClassName" even though "placeholderClassName"
// does show up in the autocomplete list for TextInput as a valid prop.

export default function App() {
  return (
    <ScrollView
      className="flex-1 bg-white px-[18px] pt-[75px]"
      contentContainerClassName="items-center">
      {/* Issue #1 */}
      <View className="w-full flex-1 items-center">
        <MaskedView maskElement={<Text className="text-[40px]">Hello World</Text>}>
          <LinearGradient
            // className="h-[80px] w-[200px]"
            style={{ height: 80, width: 200 }}
            colors={['#ff0000', '#00ff00', '#171717']}
          />
        </MaskedView>
      </View>
      {/* Issue #2 */}
      <View className="w-full flex-1 items-center">
        <TextInput
          className="h-[40px] w-full rounded-[12px] border border-black text-center"
          placeholder="Hello World"
          placeholderClassName="text-white text-[20px]"
          // placeholderTextColor="black"
        />
      </View>
    </ScrollView>
  );
}
