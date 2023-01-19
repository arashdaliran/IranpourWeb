
export function useUrl(address){
    return new URL(`../assets/${address}`, import.meta.url).href
}