const dummy = (blogs) => {
    return 1
  }
const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }
  const favorite = blogs.reduce((prev, current) => {
    return (current.likes > prev.likes) ? current : prev;
  }, blogs[0])
  
  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

  module.exports = {
    totalLikes,
    dummy,
    favouriteBlog
  }

