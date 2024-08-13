// src/App.js
import React from 'react';
import './index.css';

const Blog = ({ data }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Code copied to clipboard!');
      },
      (err) => {
        alert('Failed to copy code: ', err);
      }
    );
  };
  const combinedCode = data?.code?.join('\n\n') || '';
  return (
    <div className='blog-card'>
      {data?.title.map((title, index) => (
        <div
          key={index}
          className='blog-section'
        >
          {/* Title */}
          <h5 className='title'>
            <strong>{title}</strong>
          </h5>
          {/* Paragraph (if exists) */}
          {data?.paragraph[index] && (
            <h5 className='paragraph'>{data.paragraph[index]}</h5>
          )}
          {data?.principles ? (
            <>
              <h5 className='title'>
                <strong>Core Principles 🎯</strong>
              </h5>
              <ul className='principles-list'>
                {data?.principles.map((principle, index) => {
                  return (
                    <>
                      <li key={index}>{principle}</li>
                    </>
                  );
                })}
              </ul>
            </>
          ) : null}
          {data?.concept ? (
            <>
              <h5 className='title'>
                <strong>Key Concepts 💡</strong>
              </h5>
              <ul className='principles-list'>
                {data?.concept.map((principle, index) => {
                  return (
                    <>
                      <li key={index}>{principle}</li>
                    </>
                  );
                })}
              </ul>
            </>
          ) : null}
          {data?.image && (
            <span className='image'>
              <img
                width={500}
                height={400}
                src={data.image}
                alt='Blog Visual'
              />
            </span>
          )}
          {/* Example (if exists) */}
          {data?.example[index] && (
            <h5 className='title'> {data.example[index]}</h5>
          )}
          {/* Code Snippet (if exists) */}{' '}
          <button
            className='copy-button'
            onClick={() => copyToClipboard(combinedCode)}
          >
            Copy
          </button>
          {data?.code && (
            <div className='code-block'>
              <div className='code-container'>
                <code className='custom-code'>{combinedCode}</code>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Render image at the end (if exists) */}
    </div>
  );
};

export default Blog;
