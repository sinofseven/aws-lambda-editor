# aws-lambda-editor
AWS Lambda用のWeb Editor  
AWS Lambda(Node v6.10)用のデプロイパッケージ(zipファイル)の生成するWebEditor。  
npmモジュールを含むデプロイパッケージ生成のWebアプリは以前作成したが、  
Node.jsのコードは毎回同じものを使用していたので今回コードの記述部も含めて再度作成。  
コードのエディタにはMicrosoftのMonaco Editorを使用する。

## 基本構成
AWSをフル活用。  
- S3, CloudFrontを使用したWebフロント。
- API Gateway, Lambdaを使用したデプロイパッケージ(zipファイル)生成パート
- 独自ドメインの部分にはCertification Manager
