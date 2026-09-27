import { Stack } from "expo-router";

// Todas as telas desenham o próprio cabeçalho.
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="trilhas" />
      <Stack.Screen name="cachoeiras" />
      <Stack.Screen name="restaurantes" />
      <Stack.Screen name="hospedagens" />
      <Stack.Screen name="mapa" />
      <Stack.Screen name="favoritos" />

      {/*
        "detalhes" é um grupo com layout próprio.
      */}
      <Stack.Screen name="detalhes" />
    </Stack>
  );
}