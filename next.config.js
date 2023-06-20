/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', "m.media-amazon.com", "images-na.ssl-images-amazon.com", "encrypted-tbn0.gstatic.com"],
},

}

module.exports = nextConfig


