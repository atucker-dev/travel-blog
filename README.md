## Travel blog using Hugo, Blist theme, and AWS S3

- [Hugo](https://gohugo.io/getting-started/quick-start/)
- [Blist Theme](https://themes.gohugo.io/themes/blist-hugo-theme/)
- [AWS S3 static website](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/) using REST API endpoint and CloudFront OAI
- [CloudFront URL Rewrite Function](/ssg-cf-function-append-index.js) based on [this AWS example function](https://github.com/aws-samples/amazon-cloudfront-functions/tree/main/url-rewrite-single-page-apps)

---

### Build/Deploy

**Local**
```
hugo serve --themesDir <path-to-theme>
```

**AWS S3**
> **__NOTE__** AWS CLI setup with valid access key required for deploy steps
```
hugo
hugo deploy --target=<deployment.target.name> --dryRun
hugo deploy --target=<deployment.target.name>
```
See [config.toml](/config.toml) for deployment target example

---

### Changes to Blist theme
- Added hover background color change for header links in [header.html](/themes/blist/layouts/partials/header.html)
- Added Pinterest and Facebook icons (svg files) to [social.html](/themes/blist/layouts/partials/social.html)