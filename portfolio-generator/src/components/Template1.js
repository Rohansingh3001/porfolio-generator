import React from 'react';

const Template1 = ({ name, title, bio, links }) => (
  <div className="bg-gray-100 p-6">
    <h1 className="text-3xl font-bold">{name}</h1>
    <h2 className="text-xl text-gray-700">{title}</h2>
    <p className="mt-4">{bio}</p>
    <ul className="mt-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.url} className="text-blue-500">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Template1;
