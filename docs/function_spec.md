# Coffee Break - 関数仕様書

## 関数一覧

### services/

#### `coffeeService.ts`
- `fetchCoffees()` - 全コーヒー取得
  - 引数: なし
  - 戻り値: `Promise<Coffee[]>`
  - 役割: JSONファイルからコーヒー情報を取得

- `getCoffeeById(id: string)` - コーヒー詳細取得
  - 引数: `id: string` - コーヒーID
  - 戻り値: `Promise<Coffee | null>`
  - 役割: 指定IDのコーヒー情報を取得

- `searchCoffees(query: string)` - コーヒー検索
  - 引数: `query: string` - 検索キーワード
  - 戻り値: `Promise<Coffee[]>`
  - 役割: 名前やオリジンで検索

### storage/

#### `favoriteStorage.ts`
- `getFavorites()` - お気に入り取得
  - 引数: なし
  - 戻り値: `string[]` - コーヒーIDの配列
  - 役割: localStorageからお気に入りを取得

- `addFavorite(id: string)` - お気に入り追加
  - 引数: `id: string` - コーヒーID
  - 戻り値: `void`
  - 役割: localStorageにお気に入りを追加

- `removeFavorite(id: string)` - お気に入り削除
  - 引数: `id: string` - コーヒーID
  - 戻り値: `void`
  - 役割: localStorageからお気に入りを削除

### utils/

#### `idGenerator.ts`
- `generateId()` - ID生成
  - 引数: なし
  - 戻り値: `string` - ユニークID
  - 役割: UUID形式のIDを生成

#### `dateUtils.ts`
- `formatDate(date: Date)` - 日付フォーマット
  - 引数: `date: Date` - 日付オブジェクト
  - 戻り値: `string` - フォーマット済み日付
  - 役割: 日付を"YYYY-MM-DD"形式にフォーマット
