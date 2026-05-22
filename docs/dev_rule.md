# Coffee Break - 開発ルール

## Git運用

### ブランチ戦略 (Git Flow)
- `main` - 本番環境
- `develop` - 開発環境
- `feature/*` - 機能開発用
- `fix/*` - バグ修正用

### コミットメッセージ規約

```
<type>(<scope>): <subject>

<body>
<footer>
```

#### Type
- `feat` - 新機能
- `fix` - バグ修正
- `docs` - ドキュメント更新
- `style` - フォーマット・スタイル変更
- `refactor` - リファクタリング
- `perf` - パフォーマンス改善
- `test` - テスト追加・変更
- `chore` - ビルド・依存関係の変更

#### 例
```
feat(coffee-list): コーヒー一覧の検索機能を追加

検索ボックスを実装し、名前とオリジンで検索可能に
```

## 命名規則

### ファイル名
- コンポーネント: PascalCase (`UserCard.tsx`)
- 関数・ユーティリティ: camelCase (`getCoffeeById.ts`)
- 定数: UPPER_SNAKE_CASE (`COFFEE_TYPES.ts`)

### 変数・関数名
- 変数: camelCase (`selectedCoffee`, `isFavorite`)
- 関数: camelCase, 動詞で始める (`fetchCoffees`, `handleSearch`)
- 定数: UPPER_SNAKE_CASE (`DEFAULT_TIMEOUT`, `API_BASE_URL`)

### Reactコンポーネント
- 名前: PascalCase (`CoffeeCard`, `CoffeeList`)
- Props型: `${ComponentName}Props` (`CoffeeCardProps`)

## TypeScript規約

### 型定義
- `types/`ディレクトリに型定義を集約
- インターフェース: `I`プレフィックスなし
- 型定義: `type`と`interface`を使い分ける

```typescript
// オブジェクト型 → interface
interface Coffee {
  id: string
  name: string
}

// Union型・複雑な型 → type
type CoffeeId = string | number
```

### Nullチェック
- 常に`null`/`undefined`をチェック
- Optional chaining (`?.`)を使用
- Nullish coalescing (`??`)を使用

## コードスタイル

### フォーマッター
- Prettierを使用
- インデント: 2スペース
- セミコロン: あり

### リント
- ESLintで静的解析
- eslint-plugin-react推奨ルールに従う

## テスト規約

- 各機能にはユニットテストを作成
- テストファイル: `*.test.ts(x)`
- カバレッジ目標: 80%以上

## ドキュメント

- 複雑なロジックにはコメントを記載
- READMEは常に最新状態に保つ
- 新機能追加時はドキュメント更新も同時に行う
