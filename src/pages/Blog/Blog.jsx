import React from 'react';
import './Blog.css';


const Blog = () => {

    return (
        <div className="container">
        <div className='route-title'>
        <h2 className="blog-heading text-center mb-5">Blog Questions: </h2>
        </div>
        <section className="col-md-12">
          <h3>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
          <p>
          An access token is a credential that proves a client's authorization to access specific resources. It is included in API requests. A refresh token is a credential used to obtain a new access token when the current one expires. It is securely stored on the server.

          On the client-side, you can store access tokens in the browser's memory, HTTP-only cookies, or secure local storage. It's important to choose a secure storage option that minimizes the risk of unauthorized access or attacks such as XSS.
          <br></br>
          <br></br>
          <h5>Access Token:</h5> 
          <ul>
            <li>Credential for client authorization.</li>
            <li>Included in API requests.</li>
            <li>Issued by authentication server or identity provider.</li>
            <li>Has a limited lifespan.</li>
            <li>Used to access protected resources.</li>
          </ul>

          <br></br>
          <h5>Refresh Token:</h5>

          <ul>
            <li>Long-lived credential.</li>
            <li>Used to obtain a new access token.</li>
            <li>Issued alongside access token.</li>
            <li>Stored securely on the server.</li>
            <li>Used to maintain authenticated session.</li>
          </ul>
          </p>
          <hr />
          <h3>2. Compare SQL and NoSQL databases?</h3>
          <p>
            
            <h5>SQL Databases:</h5>

            <ul>
              <li>Use structured schemas and predefined tables.</li>
              <li>Follow ACID properties for data consistency.</li>
              <li>Support complex queries and relationships.</li>
              <li>Provide strong data consistency and referential integrity.</li>
              <li>Well-suited for applications with structured data requirements.</li>
            </ul>

           <h5>NoSQL Databases:</h5>
            <ul>
            <li>Use flexible schemas and various data models.</li>
            <li>Do not enforce fixed schemas, allowing flexibility.</li>
            <li>Scale horizontally and handle large volumes of data.</li>
            <li>Prioritize availability and partition tolerance.</li>
            <li>Well-suited for handling unstructured or semi-structured data.</li>
            </ul>

            <h5>Key Differences:</h5>

            <ul>
            <li>SQL databases have structured schemas, while NoSQL databases have flexible schemas.</li>
            <li>SQL databases use SQL as the query language, while NoSQL databases may have their own query languages or flexible querying approaches.</li>
            <li>SQL databases provide strong consistency with ACID properties, while NoSQL databases prioritize availability and partition tolerance.</li>
            <li>SQL databases are suitable for structured data, while NoSQL databases handle unstructured or semi-structured data.</li>
            </ul>
          </p>
          <hr />
          <h3>3. What is express js? What is Nest JS?</h3>
          <p>
          <h5>Express.js</h5>
            <ul>
              <li>
                Minimalistic and lightweight web application framework for Node.js
                <ul>
                  <li>Provides a simple and unopinionated approach to building web servers and APIs</li>
                  <li>Offers a minimal set of features, allowing developers to have granular control over the application's structure and behavior</li>
                  <li>Follows the middleware-based architecture for handling requests and responses</li>
                  <li>Supports various HTTP methods (GET, POST, PUT, DELETE, etc.) for routing and request handling</li>
                  <li>Has a vast ecosystem of middleware and plugins for adding additional functionality</li>
                </ul>
              </li>
            </ul>

            <h5>NestJS</h5>
            <ul>
              <li>
                Full-featured, opinionated framework for building scalable and maintainable server-side applications with TypeScript
                <ul>
                  <li>Built on top of Express.js, leveraging its robustness and compatibility</li>
                  <li>Takes inspiration from Angular's architecture and design principles</li>
                  <li>Uses a modular and component-based approach to organizing the codebase</li>
                  <li>Emphasizes the use of decorators, dependency injection, and TypeScript decorators for structured and extensible development</li>
                  <li>Provides built-in support for features like dependency injection, middleware, routing, authentication, and more</li>
                  <li>Promotes the use of design patterns such as dependency inversion, separation of concerns, and modules for scalability and testability</li>
                </ul>
              </li>
            </ul>
          </p>

          <h3>What is MongoDB aggregate and how does it work?</h3>
            <p>In MongoDB, the aggregate method is used for advanced data aggregation operations. It allows you to process and transform data using various stages of the aggregation pipeline.</p>

            <h2>Aggregation Stages:</h2>
            <ol>
              <li>
                <h3>Match Stage</h3>
                <p>Filters documents based on specified criteria using the $match operator. It selects only the documents that match the given conditions, similar to the find method.</p>
              </li>
              <li>
                <h3>Group Stage</h3>
                <p>Groups documents and performs aggregations using the $group operator. It groups documents based on a specified key or keys and allows you to perform aggregation operations such as sum, average, count, etc., on the grouped data.</p>
              </li>
              <li>
                <h3>Project Stage</h3>
                <p>Reshapes and transforms documents using the $project operator. It allows you to include or exclude specific fields from the output, create new fields, or apply expressions to existing fields.</p>
              </li>
              <li>
                <h3>Sort Stage</h3>
                <p>Sorts documents based on specified criteria using the $sort operator. It orders the documents in the pipeline based on one or more fields in ascending or descending order.</p>
              </li>
              <li>
                <h3>Limit and Skip Stages</h3>
                <p>Limits and skips documents in the result set using the $limit and $skip operators, respectively. $limit specifies the maximum number of documents to include in the output, while $skip skips a specified number of documents from the beginning of the result set.</p>
              </li>
              <li>
                <h3>Other Stages</h3>
                      <p>Additional stages like unwind, lookup, facet, etc., provide various data manipulation operations. The unwind stage is used to deconstruct an array field into separate documents. The lookup stage allows you to perform a left outer join with another collection. The facet stage enables multiple aggregations to be computed within a single stage, providing more flexibility in the pipeline.</p>
                    </li>
                  </ol>

                  <p>The aggregation pipeline enables us to combine these stages in a sequence to perform complex data aggregation tasks in MongoDB. It provides powerful capabilities for data analysis, reporting, and deriving meaningful insights from our data.</p>
        </section>
      </div>
    );
};

export default Blog;