import { Tabs } from "expo-router";

export default function TabLayout() {
    return(
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen name="kitty" options={{title: "Kitty Page"}}/>
            <Tabs.Screen name="puppy" options={{title: "Puppy Page"}}/>
        </Tabs>
    );
}