/**
 * コーヒーの型定義
 */
export type RoastLevel = 'Light' | 'Medium' | 'Dark'

export type Acidity = 'Low' | 'Medium' | 'High'

export type Depth = 'Light' | 'Medium' | 'Full'

export interface Coffee {
  /** コーヒーID */
  id: string
  /** コーヒー名 */
  name: string
  /** 原産地 */
  origin: string
  /** 焙煎度合い */
  roastLevel: RoastLevel
  /** 酸味 */
  acidity: Acidity
  /** コク */
  depth: Depth
  /** 風味タグ */
  flavor: string[]
  /** 説明 */
  description: string
  /** ペアリング候補 */
  pairing: string[]
  /** 推奨音楽ジャンル */
  musicGenre: string[]
}
