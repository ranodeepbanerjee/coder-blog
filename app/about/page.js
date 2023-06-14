import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Coder Blog</h1>
        <p className="text-gray-600">
          Coder Blog is a platform dedicated to sharing knowledge and insights about coding, programming languages, web development, and technology. Our mission is to provide valuable content, tutorials, and resources to help aspiring developers and experienced professionals enhance their skills and stay updated with the latest trends in the industry.
        </p>
        <p className="text-gray-600">
          Whether you're a beginner just starting your coding journey or a seasoned developer looking to expand your knowledge, Coder Blog offers a wide range of articles, guides, and tutorials to cater to all skill levels. Our team of experienced writers and industry experts strives to deliver informative and engaging content that covers various topics in the coding and tech world.
        </p>
        <p className="text-gray-600">
          We believe that continuous learning and collaboration are the keys to success in the ever-evolving field of technology. That's why we encourage our readers to actively engage with our content, leave comments, and share their own experiences. We foster a community-driven environment where knowledge sharing and networking can thrive.
        </p>
        <p className="text-gray-600">
          Thank you for being a part of Coder Blog. We hope you find our platform valuable and enjoy your learning journey with us. Happy coding!
        </p>
      </div>
    </>
  )
}

export default page