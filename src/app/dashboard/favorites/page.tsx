import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons";


export const metadata = {
    title: 'Favoritos',
    description: 'Mis pokemons favoritos',
};


export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokémons favoritos <small className="text-pink-500">Estatico</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    );
}