import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import TelaGradiente from "../components/ui/TelaGradiente";
import CabecalhoApp from "../components/ui/CabecalhoApp";
import CategoriasRow from "../components/ui/CategoriasRow";
import BotaoMapa from "../components/ui/BotaoMapa";
import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocais } from "../services/locaisService";
import { colors, spacing, typography } from "../theme";

export default function HomeScreen() {
  const { locais, carregando, erro } = useLocais(
    buscarLocais,
    "Não foi possível carregar os locais."
  );

  // Filtro de busca é só de apresentação: filtra em memória a lista
  // que o hook useLocais já buscou. Não altera useLocais nem faz
  // nenhuma chamada de API adicional.
  const [busca, setBusca] = useState("");

  const locaisFiltrados = useMemo(() => {
    if (!busca.trim()) return locais;

    const termo = busca.trim().toLowerCase();

    return locais.filter(
      (local) =>
        local.nome.toLowerCase().includes(termo) ||
        local.cidade.toLowerCase().includes(termo)
    );
  }, [locais, busca]);

  return (
    <TelaGradiente>
      <CabecalhoApp
        busca={busca}
        aoMudarBusca={setBusca}
        placeholderBusca="Buscar trilhas, cachoeiras..."
      />

      <CategoriasRow />

      <BotaoMapa />

      <Pressable
        style={({ pressed }) => [
          styles.botaoFavoritos,
          pressed && styles.botaoPressionado,
        ]}
        onPress={() => router.push("/favoritos")}
      >
        <Ionicons name="heart-outline" size={20} color="#FFFFFF" />

        <Text style={styles.textoFavoritos}>
          Ver meus favoritos
        </Text>

        <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
      </Pressable>

      <ListaLocais
        locais={locaisFiltrados}
        carregando={carregando}
        erro={erro}
        mensagemVazio="Nenhum local encontrado."
      />
    </TelaGradiente>
  );
}

const styles = StyleSheet.create({
  botaoFavoritos: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: spacing.md,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 12,
    backgroundColor: "#6A4FD8",
    gap: spacing.sm,
  },

  botaoPressionado: {
    opacity: 0.8,
  },

  textoFavoritos: {
    ...typography.corpo,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});