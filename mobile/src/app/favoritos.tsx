import { useMemo } from "react";
import { router } from "expo-router";
import TelaGradiente from "../components/ui/TelaGradiente";
import CabecalhoSecao from "../components/ui/CabecalhoSecao";
import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { useFavoritos } from "../hooks/useFavoritos";
import { buscarLocais } from "../services/locaisService";

export default function FavoritosScreen() {
  const { locais, carregando, erro } = useLocais(
    buscarLocais,
    "Não foi possível carregar os locais."
  );

  const { favoritos, carregado } = useFavoritos();

  const locaisFavoritos = useMemo(() => {
    if (!carregado) return [];

    const idsFavoritos = new Set(favoritos);

    return locais.filter((local) => idsFavoritos.has(local.id));
  }, [locais, favoritos, carregado]);

  return (
    <TelaGradiente>
      <CabecalhoSecao
        titulo="Favoritos"
        aoVoltar={() => router.back()}
      />

      <ListaLocais
        locais={locaisFavoritos}
        carregando={carregando || !carregado}
        erro={erro}
        mensagemVazio="Você ainda não salvou nenhum local."
      />
    </TelaGradiente>
  );
}