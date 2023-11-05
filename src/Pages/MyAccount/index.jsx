function MyAccount() {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">My account</h2>

          <div className="flex items-center mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Foto de perfil" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-bold">Username</h3>
              <p className="text-gray-600">Email: usuario@example.com</p>
            </div>
          </div>

          <h4 className="text-lg font-bold mb-2">Personal information</h4>
          <div className="bg-gray-200 rounded-lg p-4">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Phone:</strong> +1234567890</p>
            <p><strong>Direction:</strong> Calle Principal, Ciudad, País</p>
          </div>

          <h4 className="text-lg font-bold mt-4 mb-2">Configuración de la cuenta</h4>
          <div className="bg-gray-200 rounded-lg p-4">
            <p><strong>Language:</strong> Español</p>
            <p><strong>Time zone:</strong> GMT+1</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAccount