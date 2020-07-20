const nowPosts = require('./src/data/now.json')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const posts = nowPosts

  posts.forEach(entry => {
    const post = {
      id: createNodeId(`Now-${entry.date}`),
      ...entry,
      internal: {
        type: 'Now',
        contentDigest: createContentDigest(entry),
      },
    }
    actions.createNode(post)
  })
}
