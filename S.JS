import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

function Posts() {
  const { id } = useParams();
  return 
}

export default function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/posts/:id" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
}