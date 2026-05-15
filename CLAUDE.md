# task-board

## プロジェクト概要

タスク管理ボードアプリケーション。

## Git 運用ルール

### 基本方針
- **コードを変更するたびに GitHub へプッシュする**
- `main` ブランチを常に最新・動作する状態に保つ
- 機能追加・バグ修正は作業単位ごとにコミットする

### コミット手順
1. 変更をステージング: `git add <ファイル名>` (原則ファイル指定。`git add .` は使わない)
2. コミット: `git commit -m "変更内容を簡潔に記述"`
3. プッシュ: `git push origin main`

### コミットメッセージ規則
- 日本語でも英語でも可
- 変更の「何を・なぜ」を一行で表現する
- 例: `タスク追加フォームのバリデーションを修正`, `fix: task card drag-and-drop on mobile`

### 禁止事項
- `--no-verify` でフックをスキップしない
- `git push --force` は使用しない（やむを得ない場合は必ず確認を取る）
- `.env` や認証情報をコミットしない

## デプロイ先

https://tatyamyam.github.io/task-board/

## 技術スタック

| 種別 | 技術 |
|------|------|
| UI ライブラリ | React 18 |
| ビルドツール | Vite 5 |
| 言語 | JavaScript (JSX) |
| スタイリング | Plain CSS (CSS Modules 不使用) |
| 状態管理 | React `useState` / `useEffect` |
| データ永続化 | `localStorage` |

## コンポーネント命名規約

- **ファイル名**: PascalCase（例: `TaskItem.jsx`）
- **コンポーネント関数名**: ファイル名と同一の PascalCase（例: `export default function TaskItem`）
- **配置場所**: `src/components/` 以下にすべて格納
- **CSS クラス名**: BEM 風のケバブケース（例: `.task-item__delete`, `.task-item--completed`）

## 開発方針

- セキュリティ上の問題（XSS・SQL インジェクション等）は即座に修正する
- 動作確認なしに「完了」と報告しない
- コメントは「なぜそうしているか」が非自明な場合のみ記述する
