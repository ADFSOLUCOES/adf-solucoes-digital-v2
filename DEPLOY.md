# Guia de Deploy - ADF Soluções Digital

## Procedimento de Deploy no cPanel

### Opção 1: Deploy Automático via Git (Recomendado)

1. **No cPanel, vá em "Git Version Control"**
2. **Se já tiver o repositório configurado:**
   - Clique em "Pull or Deploy"
   - O cPanel vai executar o `.cpanel.yml` automaticamente
   - Aguarde o processo terminar

3. **Se for a primeira vez:**
   - Clique em "Create"
   - Cole a URL do repositório: `https://github.com/ADFSOLUCOES/adf-solucoes-digital-v2.git`
   - Escolha o diretório: `public_html`
   - Clique em "Create"
   - Depois clique em "Pull or Deploy"

### Opção 2: Deploy Manual via File Manager

Se o deploy automático não funcionar, siga estes passos:

1. **No cPanel, vá em "Terminal" ou "SSH Access"**

2. **Execute os seguintes comandos:**

```bash
cd ~/public_html

# Limpar arquivos antigos (manter apenas .htaccess se existir)
rm -rf assets blog icons images index.html manifest.json robots.txt sitemap.xml *.svg

# Clonar ou atualizar o repositório
git clone https://github.com/ADFSOLUCOES/adf-solucoes-digital-v2.git temp_build || cd temp_build && git pull

# Instalar dependências
npm install --production=false

# Fazer o build
npm run build

# Copiar arquivos compilados para public_html
cp -R dist/* ~/public_html/
cp dist/.htaccess ~/public_html/.htaccess 2>/dev/null || cp temp_build/.htaccess ~/public_html/.htaccess

# Limpar arquivos temporários
cd ~/public_html
rm -rf temp_build node_modules

# Ajustar permissões
chmod 644 .htaccess
chmod 755 .
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

### Opção 3: Upload Manual da Pasta dist/

1. **No seu computador local, execute:**
   ```bash
   npm run build
   ```

2. **No cPanel File Manager:**
   - Vá para `public_html`
   - Delete todos os arquivos antigos (exceto .htaccess se quiser manter)
   - Faça upload de TODOS os arquivos da pasta `dist/` do seu computador
   - Certifique-se de que o `.htaccess` está na raiz do `public_html`

### Verificação Pós-Deploy

Após o deploy, verifique:

1. ✅ O arquivo `index.html` está na raiz do `public_html`
2. ✅ A pasta `assets/` existe com os arquivos CSS e JS
3. ✅ A pasta `images/` existe com todas as imagens
4. ✅ O arquivo `.htaccess` está na raiz
5. ✅ Acesse o site e verifique se está funcionando

### Problemas Comuns

**Site não carrega:**
- Verifique se o `.htaccess` está presente
- Verifique as permissões dos arquivos (644 para arquivos, 755 para pastas)
- Verifique se o módulo `mod_rewrite` está habilitado no servidor

**Imagens não aparecem:**
- Verifique se a pasta `images/` foi copiada completamente
- Verifique os caminhos no código (devem começar com `/images/`)

**Erro 404 em rotas:**
- Verifique se o `.htaccess` está configurado corretamente
- Verifique se o módulo `mod_rewrite` está habilitado

### Estrutura Final Esperada em public_html/

```
public_html/
├── .htaccess
├── index.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── index-*.css
│   ├── index-*.js
│   └── vendor-*.js
├── images/
│   ├── clients/
│   │   ├── aitra.png
│   │   └── aitraflow.png
│   ├── logo.png
│   └── ...
├── icons/
└── blog/
```
