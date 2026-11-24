import {Link, usePage} from "@inertiajs/react";
import {useState} from "react";
import {PageProps} from "@/types";

const Header = () => {

    const {cart = []} = usePage<PageProps>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-lg font-semibold text-gray-800">LaraStore</Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                    <Link href="/products" className="text-gray-600 hover:text-gray-800">Products</Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-600 hover:text-gray-800">
                    Search
                </button>
                <Link href="/cart" className="relative text-gray-600 hover:text-gray-800">
                    Cart
                    {cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                            {cartItemsCount}
                        </span>
                    )}
                </Link>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-800 md:hidden">
                    Menu
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <nav className="md:hidden bg-white shadow-md">
                <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Home</Link>
                <Link href="/products" className="block px-4 py-2 text-gray-600 hover:text-gray-800">Products</Link>
            </nav>
        )}
        {isSearchOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md p-4">
                <input type="text" placeholder="Search..." className="w-full border border-gray-300 rounded-md p-2" />
            </div>
        )}
    </div>

  )
}

export default Header