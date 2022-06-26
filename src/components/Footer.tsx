


export function Footer(){
    return (
        <footer className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Rocketseat™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Sobre</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Politicas de Privaciade</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licenças</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contato</a>
            </li>
        </ul>
    </footer>
    )
}