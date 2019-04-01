const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Iván-Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Iván', // Alternative Site title for SEO
  siteTitleShort: 'Iván', // short_name for manifest

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
