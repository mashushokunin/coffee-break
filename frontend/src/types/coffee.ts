/**
 * コーヒーの型定義
 */
export interface Coffee {
  /** コーヒーID */
  id: string
  /** コーヒー名 */
  name: string
  /** 原産地 */
  origin: string
  /** 焙煎度合い */
  roastLevel: string
  /** 風味タグ */
  flavor: string[]
  /** 説明 */
  description: string
  /** ペアリング候補 */
  pairing: string[]
  /** 推奨音楽ジャンル */
  musicGenre: string[]
}
