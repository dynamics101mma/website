import React from 'react';
import ContactLeft from './ContactLeft';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <ContactLeft />
      <div style={{ width: '90%', maxWidth: '1000px', padding: '20px', border: '2px solid #f59e0b', marginTop: '20px', marginBottom: '20px' }}>
      <h1 className="text-yellow-300 font-blackOpsOne text-3xl uppercase mb-4 text-center" style={{ marginBottom: '10px' }}>CONTACT US</h1>
        <hr style={{ border: '1px solid #f59e0b', margin: '0', width: '100%' }} />
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ color: '#FFFFFF' }}>Name</label>
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ color: '#FFFFFF' }}>Email</label>
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone" style={{ color: '#FFFFFF' }}>Phone Number</label>
          <input type="tel" id="phone" name="phone" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="queryTitle" style={{ color: '#FFFFFF' }}>Query Title</label>
          <select id="queryTitle" name="queryTitle" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}>
            <option value="option1">Classes/Package Enquiry</option>
            <option value="option2">Tournament Registration</option>
            <option value="option3">Job Opportunities</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="query" style={{ color: '#FFFFFF' }}>Query</label>
          <textarea id="query" name="query" rows={4} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} required />
        </div>
        <button className="bg-red-600 text-black border-none py-2 px-4 text-base font-bold rounded-md mx-auto" style={{ display: 'block' }}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
