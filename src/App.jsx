import HomePage from './HomePage'

function App() {
  const handleOpenApp = () => {
    const universalLink = 'https://try-ecru-two.vercel.app/extra-path-1/ulink';
    window.location.href = universalLink;
  };

  const buttonStyle = {
    width: '40%',
    padding: '8px 16px',
    backgroundColor: '#1976d2',
    color: '#fff',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div className="App" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '40px' }}>
      <h1>Let's Try Anchor and button</h1>
      {/* Anchor Tag */}
      <a
        href="https://try-ecru-two.vercel.app/extra-path-1/ulink"
        style={buttonStyle}
      >
        Open mAadhaar (Anchor)
      </a>

      {/* Native Button */}
      <button
        onClick={handleOpenApp}
        style={buttonStyle}
      >
        Open mAadhaar (Button)
      </button>
    </div>
  );
}

export default App;

export default App;
