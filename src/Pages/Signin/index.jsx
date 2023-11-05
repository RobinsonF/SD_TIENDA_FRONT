function Signin() {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
        <div className="md:w-1/2">
          <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="Imagen de inicio de sesión" className="w-50 h-auto" />
        </div>
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Login in</h2>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg py-2 px-3" placeholder="email" required />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Password:</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-lg py-2 px-3" placeholder="password" required />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login in</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin