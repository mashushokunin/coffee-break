const FAVORITES_KEY = 'coffee_favorites'

/**
 * localStorageからお気に入りのコーヒーIDを取得
 */
export function getFavorites(): string[] {
  const stored = localStorage.getItem(FAVORITES_KEY)
  return stored ? JSON.parse(stored) : []
}

/**
 * お気に入りにコーヒーを追加
 */
export function addFavorite(coffeeId: string): void {
  const favorites = getFavorites()
  if (!favorites.includes(coffeeId)) {
    favorites.push(coffeeId)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }
}

/**
 * お気に入りからコーヒーを削除
 */
export function removeFavorite(coffeeId: string): void {
  const favorites = getFavorites()
  const filtered = favorites.filter(id => id !== coffeeId)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered))
}

/**
 * コーヒーがお気に入りに入っているかチェック
 */
export function isFavorite(coffeeId: string): boolean {
  return getFavorites().includes(coffeeId)
}
