import { useState, useEffect } from "react"

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('dark') === 'true') {
      setIsDark(true);
      document.body.classList.add('dark');
    }else{
      setIsDark(false);
      document.body.classList.remove('dark');
    }
  }, []);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('dark', 'false');
    }else{
      document.body.classList.add('dark');
      localStorage.setItem('dark', 'true');
    }
  }

  return (
    <>
      <div className="bg-gradient-to-tr from-cyan-700 to-amber-700 text-center text-pink-100 font-light p-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl hover:from-orange-700 hover:to-sky-700 hover:font-bold transition-all duration-500 dark:from-stone-600 dark:to-slate-600 dark:text-[#ccc]" onClick={handleDarkMode} >Hello TailWind</div>
      <div className="container mx-auto p-5 dark:bg-slate-300 grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow dark:bg-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti tempore deserunt dolor recusandae esse, nihil odit eius. Inventore, eum, ad numquam debitis, voluptatum tenetur ea commodi iste iusto provident cumque autem nostrum ipsum hic. Debitis, illum nemo. Quas, quisquam!</div>
        <div className="p-4 border rounded shadow dark:bg-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti tempore deserunt dolor recusandae esse, nihil odit eius. Inventore, eum, ad numquam debitis, voluptatum tenetur ea commodi iste iusto provident cumque autem nostrum ipsum hic. Debitis, illum nemo. Quas, quisquam!</div>
        <div className="p-4 border rounded shadow dark:bg-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti tempore deserunt dolor recusandae esse, nihil odit eius. Inventore, eum, ad numquam debitis, voluptatum tenetur ea commodi iste iusto provident cumque autem nostrum ipsum hic. Debitis, illum nemo. Quas, quisquam!</div>
      </div>
    </>
  )
}

export default App
