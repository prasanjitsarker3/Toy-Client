import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-3'>
                <div className='border p-3'>
                    <p className='text-lg font-serif font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p>An access token is a token that grants access to a protected resource. When the access token expires, the client can present the refresh token to the authorization server. That server validates the user’s account is still active, that there is still an active session, and any other required logic. The authorization server can then issue a new access token.
                        There are different ways to store access and refresh tokens on the client-side. One option is to store in an httpOnly cookie. And another option is local storage</p>
                </div>
                <div className='border p-3'>
                    <p className='text-lg font-serif font-semibold'>Compare SQL and NoSQL databases?</p>
                    <p>SQL and NoSQL are two distinct categories of database management systems, each with its own strengths and weaknesses.
                        SQL databases utilize a structured data model known as the relational model. Data is organized into tables with predefined schemas, and relationships between tables are established using keys. SQL databases traditionally have vertical scalability, where a single server is scaled up by adding more resources such as CPU, RAM, or storage.
                        NoSQL databases employ a variety of data models, including key-value, document, columnar, and graph models.  NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, allowing for easy scaling by adding more machines to handle increased load.</p>
                </div>
                <div className='border p-3'>
                    <p className='text-lg font-serif font-semibold'>What is express js? What is Nest JS (google it)</p>
                    <p>Express.js and Nest.js are both web application frameworks used for building server-side applications, but they differ in their architectural styles and features.
                        Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the APIs of Node.js web server functionality and adds helpful new features. It makes it easier to organize your application’s functionality with middleware and routing.
                        Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript.</p>
                </div>
                <div className='border p-3'>
                    <p className='text-lg font-serif font-semibold'> What is MongoDB aggregate and how does it work (google it)</p>
                    <p>In MongoDB, the aggregate function is a powerful tool used for data aggregation and analysis. It allows you to perform complex data processing tasks, such as filtering, grouping, sorting, and transforming data within a collection. The aggregate function operates on a collection and takes an array of stages as input. The aggregation framework in MongoDB provides a flexible and expressive way to process data, allowing you to perform complex operations in a single query. By combining multiple stages, you can create sophisticated pipelines to extract meaningful insights from your data.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;