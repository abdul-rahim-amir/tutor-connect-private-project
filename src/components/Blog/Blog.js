import React from 'react';
import img from '../../assets/backgroundImg.png';
import img1 from '../../assets/digital-age.jpg';
import img2 from '../../assets/continous-learning.jpg';
// Sample blog data array
const blogs = [
    {
        id: 1,
        title: "The Future of Education: Blended Learning",
        excerpt: "Blended learning combines online educational materials with traditional classroom methods, enhancing flexibility and learning control.",
        date: "August 10, 2024",
        author: "Jane Doe",
        imageUrl: img, // Replace with actual image URL
        readMoreUrl: "/blogs/blended-learning"
    },
    {
        id: 2,
        title: "Innovative Teaching Methods for the Digital Age",
        excerpt: "Explore modern teaching techniques that cater to the digital native generation, enhancing engagement and learning outcomes.",
        date: "August 15, 2024",
        author: "John Smith",
        imageUrl:img1, // Replace with actual image URL
        readMoreUrl: "/blogs/innovative-teaching"
    },
    {
        id: 3,
        title: "The Importance of Continuous Learning",
        excerpt: "Continuous learning is vital in a rapidly evolving world, enabling individuals to remain competitive and informed.",
        date: "August 20, 2024",
        author: "Alice Johnson",
        imageUrl: img2, // Replace with actual image URL
        readMoreUrl: "/blogs/continuous-learning"
    }
];

function Blogs() {
    return (
        <div className="max-w-6xl mt-6 mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
            {blogs.map(blog => (
                <div key={blog.id} className="mb-10 p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                    <img src={blog.imageUrl} alt="Blog cover" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                    <p className="text-gray-500 text-sm mb-2">Posted on {blog.date} by {blog.author}</p>
                    <a href={blog.readMoreUrl} className="text-purple-600 hover:text-purple-800 transition duration-300">Read more</a>
                </div>
            ))}
        </div>
    );
}

export default Blogs;
