import { Coffee } from '../types/coffee'

/**
 * 全コーヒーを取得
 */
export async function fetchCoffees(): Promise<Coffee[]> {
  const response = await fetch('/data/coffees.json')
  if (!response.ok) {
    throw new Error('Failed to fetch coffees')
  }
  return response.json()
}

/**
 * IDで指定されたコーヒーを取得
 */
export async function getCoffeeById(id: string): Promise<Coffee | null> {
  const coffees = await fetchCoffees()
  return coffees.find(c => c.id === id) || null
}

/**
 * キーワードでコーヒーを検索
 */
export async function searchCoffees(query: string): Promise<Coffee[]> {
  const coffees = await fetchCoffees()
  const lowerQuery = query.toLowerCase()
  
  return coffees.filter(
    coffee =>
      coffee.name.toLowerCase().includes(lowerQuery) ||
      coffee.origin.toLowerCase().includes(lowerQuery) ||
      coffee.flavor.some(f => f.toLowerCase().includes(lowerQuery))
  )
}
