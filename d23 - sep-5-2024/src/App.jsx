

function App() {
  const rifatSadatStyle = {
    color: "blue",
    backgroundColor: "hotpink",
    padding: "20px",
    fontWeight: 600,
    marginTop: "20px",
  }

  return (
    <div>
      <div style={{ color: "blue", backgroundColor: "hotpink", padding: "20px", fontWeight: 600 }}>
        Hello Rifat & Sadat
      </div>
      <div style={rifatSadatStyle}>
        Rifate and Sadat are good friends!
      </div>
      <div className="rifat">
        Rifat is not a bad boy!
      </div>
    </div>
  )
}

export default App
