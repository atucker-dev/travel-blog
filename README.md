## Travel blog using Hugo, Blist theme, and AWS S3

- [Hugo](https://gohugo.io/getting-started/quick-start/)
- [Blist Theme](https://themes.gohugo.io/themes/blist-hugo-theme/)
- [AWS S3 static website](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/) using REST API endpoint and CloudFront OAI

---

### Build/Deploy

**Local**
```
hugo serve --themesDir <path-to-theme>
```

**AWS S3**
> **__NOTE__** AWS CLI setup with valid access key required
```
hugo
hugo deploy --target=<deployment.target.name> --dryRun
hugo deploy --target=<deployment.target.name>
```
See [config.toml](https://github.com/atucker-dev/travel-blog/blob/main/config.toml) for deployment target example

---

### Changes to Blist theme
- Added hover background color change for header links in [header.html](https://github.com/atucker-dev/travel-blog/blob/main/themes/blist/layouts/partials/header.html)
- Added Pinterest and Facebook icons (svg files) to [social.html](https://github.com/atucker-dev/travel-blog/blob/main/themes/blist/layouts/partials/social.html)