const nextMDX = require('@next/mdx');

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

async function loadPlugins() {
  const [remarkGfm, rehypePrism] = await Promise.all([
    import('remark-gfm'),
    import('@mapbox/rehype-prism'),
  ]);

  return {
    remarkGfm: remarkGfm.default,
    rehypePrism: rehypePrism.default,
  };
}

const plugins = loadPlugins();

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [plugins.remarkGfm],
    rehypePlugins: [plugins.rehypePrism],
  },
});

// Importez et utilisez la configuration Webpack personnalisée
const customWebpackConfig = require('./webpack.config.js');

module.exports = {
  ...withMDX(nextConfig),
  ...customWebpackConfig,
  images: {
    domains: ['tailwindui.com'],
    },
};
