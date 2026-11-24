
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} LaraStore. All rights reserved.
      </div>
    </div>
  )
}

export default Footer