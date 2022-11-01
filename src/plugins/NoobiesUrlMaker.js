
export function useUrl(address){
    return new URL(`${address}`, import.meta.url)
}